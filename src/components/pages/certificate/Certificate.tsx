"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firestore";

const CertificateGenerator = () => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedMember, setSelectedMember] = useState("");
  const [certificateUrl, setCertificateUrl] = useState("");

  const [teams, setTeams] = useState<Record<string, string[]>>({});

  const handleGenerate = () => {
    if (!selectedTeam || !selectedMember) return;
    generateCertificate(selectedMember);
  };

  const generateCertificate = async (name: string) => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const backgroundImage = new Image();
    backgroundImage.src = "/template/certificate-template.jpeg";
    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#a855f7";
      ctx.font = "40px 'Poppins', sans-serif";
      const textWidth = ctx.measureText(name).width;
      const x = (canvas.width - textWidth) / 2;
      ctx.fillText(name, x, 353);

      setCertificateUrl(canvas.toDataURL("image/png"));
    };
  };

  const downloadCertificate = () => {
    const link = document.createElement("a");
    link.href = certificateUrl;
    link.download = "certificate.png";
    link.click();
  };

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "teams"));

        const teamsData: Record<string, string[]> = {};

        querySnapshot.forEach((doc) => {
          const data = doc.data();

          if (data.teamName && data.members) {
            teamsData[data.teamName] = data.members.map((member: any) =>
              member.name.trim(),
            );
          }
        });

        setTeams(teamsData);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="flex w-full min-h-[80vh] flex-wrap items-center justify-center">
      <div className="about-card w-[90vw] md:w-[60vw] py-14 px-24">
        <div className="flex flex-col items-center justify-center gap-2 mb-11 uppercase text-[clamp(2rem,7vw,4rem)]">
          <span
            className="text-purple-metallic drop-shadow-sm"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
            }}
          >
            Certificate
          </span>
        </div>

        <div className="space-y-4 font-tertiary text-primary text-xl font-bold">
          <select
            className="w-full p-2 border border-gray-700 rounded bg-transparent"
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            <option value="" className="bg-[#0a0a0a] text-white font-bold">
              Select Team
            </option>
            {Object.keys(teams).map((team) => (
              <option
                key={team}
                value={team}
                className="bg-[#0a0a0a] text-white font-bold"
              >
                {team}
              </option>
            ))}
          </select>

          <select
            className="w-full p-2 border border-gray-700 rounded bg-transparent"
            onChange={(e) => setSelectedMember(e.target.value)}
            disabled={!selectedTeam}
          >
            <option value="" className="bg-[#0a0a0a] text-white font-bold">
              Select Member
            </option>
            {selectedTeam &&
              teams[selectedTeam]?.map((member) => (
                <option
                  key={member}
                  value={member}
                  className="bg-[#0a0a0a] text-white font-bold"
                >
                  {member}
                </option>
              ))}
          </select>

          <button
            className="w-full p-2 text-[#0a0a0a] rounded disabled:opacity-50"
            style={{
              background:
                "linear-gradient(to right, #6366f1aa, #a855f7aa, #ec4899aa)",
            }}
            onClick={handleGenerate}
            disabled={!selectedMember}
          >
            Generate Certificate
          </button>

          {certificateUrl && (
            <div className="mt-4">
              <img
                src={certificateUrl}
                alt="Generated Certificate"
                className="w-full"
              />
              <button
                className="mt-2 w-full p-2 bg-green-500 text-white rounded"
                onClick={downloadCertificate}
              >
                Download Certificate
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateGenerator;
