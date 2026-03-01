"use client";

import { useMemo, useState, useEffect } from "react";
import { doc, getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firestore"; 

type Team = {
  id: string;
  name: string;
  score: number;
};

export default function Leaderboard() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [track, setTrack] = useState("All");
  const [sortBy, setSortBy] = useState<"score" | "name">("score");

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "scores"));
      const data: Team[] = querySnapshot.docs.map((doc) => {
        const d = doc.data();
        return {
          id: doc.id,
          name: d.teamName,
          score: Number(d.total.toFixed(2)),
        };
      });
      setTeams(data);
    };

    fetchData();
  }, []);

  const filtered = useMemo(() => {
    let data = [...teams];

    if (sortBy === "score") {
      data.sort((a, b) => b.score - a.score);
    } else {
      data.sort((a, b) => a.name.localeCompare(b.name));
    }

    return data;
  }, [teams, track, sortBy]);

  const topThree = (() => {
    if (filtered.length < 3) {
      return filtered.map((team, index) => ({
        team,
        rank: index + 1,
      }));
    }

    return [
      { team: filtered[1], rank: 2 }, 
      { team: filtered[0], rank: 1 }, 
      { team: filtered[2], rank: 3 }, 
    ];
  })();
  const rest = filtered.slice(3);

  return (
    <div className="min-h-screen pt-32 pb-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-center mb-8 tracking-[4px] font-bold uppercase text-[clamp(2rem,7vw,4rem)]">
          <span 
            className="text-purple-metallic"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
            }}
          >
            Leaderboard
          </span>
        </h1>

        <div className="flex justify-center items-end gap-6 flex-wrap mb-10">
          {topThree.map((item) => (
            <div
              key={item.team.id}
              className="transition-all duration-300 hover:-translate-y-3 flex flex-col items-center"
            >
              {item.rank === 1 && (
                <div className="flex justify-center mb-2 animate-wave">
                  <div className="relative w-[220px]">
                    <img
                      src="/images/droid.png"
                      alt="Droid"
                      className="w-[220px] opacity-90 transition-all duration-300"
                      style={{
                        filter:
                          "hue-rotate(160deg) saturate(0.7) brightness(0.8) contrast(1.1) drop-shadow(0 0 40px rgba(168,85,247,0.35))",
                      }}
                    />
                    <div className="absolute w-[15px] h-[15px] bg-black rounded-full left-[60px] top-[72px] animate-blink" />
                    <div className="absolute w-[15px] h-[15px] bg-black rounded-full right-[65px] top-[72px] animate-blink" />
                  </div>
                </div>
              )}

              <div
                className={`text-center backdrop-blur-xl border border-white/10 transition-all duration-300
                ${
                  item.rank === 1
                    ? "w-[240px] h-[280px] p-10 bg-[#0a0a0a] shadow-[0_0_15px_rgba(168,85,247,0.6)] z-30"
                    : item.rank === 2
                    ? "w-[210px] h-[240px] p-8 bg-[#0a0a0a] shadow-[0_0_10px_rgba(168,85,247,0.4)] z-20"
                    : "w-[190px] h-[200px] p-6 bg-[#0a0a0a] shadow-[0_0_5px_rgba(168,85,247,0.3)] z-10"
                }`}
              >
                <div
                  className={`font-bold mb-2
                  ${
                    item.rank === 1
                      ? "text-[2.5rem] bg-gradient-to-br from-yellow-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
                      : item.rank === 2
                      ? "text-[2.3rem] bg-gradient-to-br from-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,192,192,0.3)]"
                      : "text-[2.1rem] bg-gradient-to-br from-orange-300 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(184,115,51,0.3)]"
                  }`}
                >
                  #{item.rank}
                </div>
                <div className="font-bold text-lg">
                  {item.team.name}
                </div>
                {/* <div className="text-3xl font-bold text-purple-400">
                  {item.team.score}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-2">
          {rest.map((team, index) => (
            <div
              key={team.id}
              className="grid grid-cols-[80px_1fr_1fr_100px] md:grid-cols-[150px_1fr_1fr_150px] bg-[#0a0a0a] items-center px-6 py-4 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-purple-500/10 hover:translate-x-2"
            >
              <div className="font-bold text-purple-400">
                #{index + 4}
              </div>
              <div>{team.name}</div>
              {/* <div className="font-semibold text-purple-400 text-right">
                {team.score}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes wave {
          0%,100% { transform: translateY(0px); }
          25%,75% { transform: translateY(-8px); }
          50% { transform: translateY(0px); }
        }

        @keyframes blink {
          0%,92%,100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }

        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 4s infinite;
        }
      `}</style>
    </div>
  );
}