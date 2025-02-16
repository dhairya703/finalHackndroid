"use client"
import { CustomText } from '@/components/custom'
import SectionLayout from '@/layouts/section-layout'
import React, { useEffect, useState } from 'react'

interface LeaderboardUser {
    "Rank": number,
    "Team Name": string
}

const Page = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([
        {
            "Rank":1,
            "Team Name":"zimz"
        },
        {
            "Rank":2,
            "Team Name":"GigaBois"
        },
        {
            "Rank":3,
            "Team Name":"billiance"
        },
        {
            "Rank":4,
            "Team Name":"Digital Shinobi "
        },
        {
            "Rank":5,
            "Team Name":"Hackoholics"
        },
        {
            "Rank":6,
            "Team Name":"Market Minds"
        },
        {
            "Rank":7,
            "Team Name":"swap trio "
        },
        {
            "Rank":8,
            "Team Name":"AuraDev"
        },
        {
            "Rank":9,
            "Team Name":"Byte Quads"
        },
        {
            "Rank":10,
            "Team Name":"Team McAloo tikki"
        },
        {
            "Rank":11,
            "Team Name":"Malaaq"
        },
        {
            "Rank":12,
            "Team Name":"ERROR-404"
        },
        {
            "Rank":13,
            "Team Name":"Code Duet"
        },
        {
            "Rank":14,
            "Team Name":"CacheMe"
        },
        {
            "Rank":15,
            "Team Name":"null pointers"
        },
        {
            "Rank":16,
            "Team Name":"Fantastic Four"
        },
        {
            "Rank":17,
            "Team Name":"trio geeks"
        },
        {
            "Rank":18,
            "Team Name":"92159"
        },
        {
            "Rank":19,
            "Team Name":"Agronexus"
        },
        {
            "Rank":20,
            "Team Name":"Codecure"
        },
        {
            "Rank":21,
            "Team Name":"Learners"
        },
        {
            "Rank":22,
            "Team Name":"NDRT tech"
        },
        {
            "Rank":23,
            "Team Name":"Tech Crew"
        },
        {
            "Rank":24,
            "Team Name":"meow meow meow meow"
        },
        {
            "Rank":25,
            "Team Name":"The Duo"
        },
        {
            "Rank":26,
            "Team Name":"bit by bit "
        },
        {
            "Rank":27,
            "Team Name":"Rambo"
        },
        {
            "Rank":28,
            "Team Name":"Qubots"
        },
        {
            "Rank":29,
            "Team Name":"team fts"
        },
        {
            "Rank":30,
            "Team Name":"Nishant Team"
        },
        {
            "Rank":31,
            "Team Name":"Pioneers"
        },
        {
            "Rank":32,
            "Team Name":"Diddy"
        },
        {
            "Rank":33,
            "Team Name":"BrainRot"
        },
        {
            "Rank":34,
            "Team Name":"BingBong"
        },
        {
            "Rank":35,
            "Team Name":"LEEVEGA"
        },
        {
            "Rank":36,
            "Team Name":"Bit sized brains"
        },
        {
            "Rank":37,
            "Team Name":"Soft Coders"
        },
        {
            "Rank":38,
            "Team Name":"Lawzzers "
        },
        {
            "Rank":39,
            "Team Name":"Wise Versa"
        },
        {
            "Rank":40,
            "Team Name":"Team FTS"
        },
        {
            "Rank":41,
            "Team Name":"Kasukabe Defense force"
        },
        {
            "Rank":42,
            "Team Name":"Sebs"
        },
        {
            "Rank":43,
            "Team Name":"HackOPS"
        },
        {
            "Rank":44,
            "Team Name":"UNTITLED "
        },
        {
            "Rank":45,
            "Team Name":"CodeCrackerz"
        },
        {
            "Rank":46,
            "Team Name":"Bucky cracks"
        },
        {
            "Rank":47,
            "Team Name":"dev and shubhra"
        },
        {
            "Rank":48,
            "Team Name":"Need Nucleus"
        },
        {
            "Rank":49,
            "Team Name":"CodeVARS"
        },
        {
            "Rank":50,
            "Team Name":"andre ani"
        },
        {
            "Rank":51,
            "Team Name":"haargaye"
        },
        {
            "Rank":52,
            "Team Name":"Varitas"
        },
        {
            "Rank":53,
            "Team Name":"syntax error"
        },
        {
            "Rank":54,
            "Team Name":"DNYX"
        },
        {
            "Rank":55,
            "Team Name":"Anony"
        },
        {
            "Rank":56,
            "Team Name":"Team Connect "
        },
        {
            "Rank":57,
            "Team Name":"TEEN TIGADA KAAM BIGADA"
        },
        {
            "Rank":58,
            "Team Name":"Z-Tech"
        },
        {
            "Rank":59,
            "Team Name":"No Brainers"
        },
        {
            "Rank":60,
            "Team Name":"HACKTIVATORS"
        },
        {
            "Rank":61,
            "Team Name":"CODILATERAL"
        },
        {
            "Rank":62,
            "Team Name":"pookiemons "
        },
        {
            "Rank":63,
            "Team Name":"splash"
        },
        {
            "Rank":64,
            "Team Name":"Newbies"
        },
        {
            "Rank":65,
            "Team Name":"Steindroid"
        },
        {
            "Rank":66,
            "Team Name":"Error 404"
        },
        {
            "Rank":67,
            "Team Name":"not wierd wolves"
        },
        {
            "Rank":68,
            "Team Name":"almost competent"
        },
        {
            "Rank":69,
            "Team Name":"trimpher"
        },
        {
            "Rank":70,
            "Team Name":"Chopped Team"
        },
        {
            "Rank":71,
            "Team Name":"HACK-HER-SQUAD"
        },
        {
            "Rank":72,
            "Team Name":"Alphynx"
        },
        {
            "Rank":73,
            "Team Name":"BYTEFORGE"
        },
        {
            "Rank":74,
            "Team Name":"Code Wizard"
        },
        {
            "Rank":75,
            "Team Name":"widamuyarchi"
        },
        {
            "Rank":76,
            "Team Name":"adaptors"
        },
        {
            "Rank":77,
            "Team Name":"BlackandWhite"
        },
        {
            "Rank":78,
            "Team Name":"fumblebean and friends"
        },
        {
            "Rank":79,
            "Team Name":"sinister69"
        },
        {
            "Rank":80,
            "Team Name":"dora"
        },
        {
            "Rank":81,
            "Team Name":"Pixels"
        },
        {
            "Rank":82,
            "Team Name":"The ONE semicolon"
        },
        {
            "Rank":83,
            "Team Name":"XForce"
        },
        {
            "Rank":84,
            "Team Name":"Volatile"
        },
        {
            "Rank":85,
            "Team Name":"cutie patooties"
        },
        {
            "Rank":86,
            "Team Name":"Code Strom"
        },
        {
            "Rank":87,
            "Team Name":"SPF42o"
        },
        {
            "Rank":88,
            "Team Name":"code crusaders"
        },
        {
            "Rank":89,
            "Team Name":"Dark knight"
        },
        {
            "Rank":90,
            "Team Name":"Noobies"
        },
        {
            "Rank":91,
            "Team Name":"f11"
        },
        {
            "Rank":92,
            "Team Name":"bread"
        },
        {
            "Rank":93,
            "Team Name":"FinElevate"
        },
        {
            "Rank":94,
            "Team Name":"Ekton FC"
        },
        {
            "Rank":95,
            "Team Name":"Studynium-AI"
        },
        {
            "Rank":96,
            "Team Name":"syntax saviour"
        },
        {
            "Rank":97,
            "Team Name":"Digital Divas"
        },
        {
            "Rank":98,
            "Team Name":"NKB Hackers"
        },
        {
            "Rank":99,
            "Team Name":"syntax_error"
        },
        {
            "Rank":100,
            "Team Name":"Web-i-warriors "
        },
        {
            "Rank":101,
            "Team Name":"The solution squad"
        },
        {
            "Rank":102,
            "Team Name":"JBl"
        },
        {
            "Rank":103,
            "Team Name":"NAN0_B1TZ"
        },
        {
            "Rank":104,
            "Team Name":"IOS"
        },
        {
            "Rank":105,
            "Team Name":"Art coders"
        },
        {
            "Rank":106,
            "Team Name":"404 Brain Not Found"
        },
        {
            "Rank":107,
            "Team Name":"The Debuggers"
        },
        {
            "Rank":108,
            "Team Name":"Cookers"
        },
        {
            "Rank":109,
            "Team Name":"Kipnotics"
        },
        {
            "Rank":110,
            "Team Name":"The Boys"
        },
        {
            "Rank":111,
            "Team Name":"Code Ninjas"
        },
        {
            "Rank":112,
            "Team Name":"Include skills.h"
        },
        {
            "Rank":113,
            "Team Name":"Disco Devs"
        },
        {
            "Rank":114,
            "Team Name":"Ctrl+Alt+Del"
        },
        {
            "Rank":115,
            "Team Name":"Techies"
        },
        {
            "Rank":116,
            "Team Name":"Algomist"
        },
        {
            "Rank":117,
            "Team Name":"Buzz Hack"
        },
        {
            "Rank":118,
            "Team Name":"Edgepulse"
        },
        {
            "Rank":119,
            "Team Name":"code wizards "
        },
        {
            "Rank":120,
            "Team Name":"Pookiemons"
        },
        {
            "Rank":121,
            "Team Name":"TrioGeeks"
        }
    ]);

    // useEffect(() => {
    //     async function fetchLeaderboard() {
    //       try {
    //         const data = await getLeaderboard();
    //         setLeaderboard(data);
    //       } catch (error) {
    //         console.error("Failed to load leaderboard", error);
    //       }
    //     }
    //     fetchLeaderboard();
    //   }, []);

    return (
        <div>
    <SectionLayout>
        <div className="flex items-center justify-center">
            <CustomText description>
                <p className="text-5xl md:text-7xl md:font-bold text-primary">Leaderboard</p>
            </CustomText>
        </div>
    </SectionLayout>

    <div className="max-w-3xl mx-auto text-xl mt-10 p-5 bg-gray-900 text-[#11f800] font-vcr rounded-lg shadow-lg">
        <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 table-fixed">
                <thead>
                    <tr className="bg-gray-800 text-gray-300 border-b border-gray-700">
                        <th className="py-2 px-4 w-1/2 border-r border-gray-700 text-left">Rank</th>
                        <th className="py-2 px-4 w-1/2 text-left">Team Name</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((user, index) => (
                        <tr key={user.Rank} className="border-t border-gray-700">
                            <td className="py-2 px-4 w-1/2 border-r border-gray-700">{user.Rank}</td>
                            <td className="py-2 px-4 w-1/2">{user['Team Name']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
</div>

    );
};

export default Page;
