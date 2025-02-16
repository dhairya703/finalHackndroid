"use client"
import { CustomText } from '@/components/custom'
import SectionLayout from '@/layouts/section-layout'
import React, { useEffect, useState } from 'react'

interface LeaderboardUser {
    teamName: string
}

const Page = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([
        {teamName:"zimz"},
        {teamName:"GigaBois"},
        {teamName:"billiance"},
        {teamName:"Digital Shinobi"},
        {teamName:"Hackoholics"},
        {teamName:"Market Minds"},
        {teamName:"swap trio"},
        {teamName:"AuraDev"},
        {teamName:"Byte Quads"},
        {teamName:"Team McAloo tikki"},
        {teamName:"pseudo apt"},
        {teamName:"Malaaq"},
        {teamName:"ERROR-404"},
        {teamName:"Code Duet"},
        {teamName:"CacheMe"},
        {teamName:"null pointers"},
        {teamName:"Fantastic Four"},
        {teamName:"trio geeks"},
        {teamName:"92159"},
        {teamName:"Agronexus"},
        {teamName:"Codecure"},
        {teamName:"Learners"},
        {teamName:"NDRT tech"},
        {teamName:"Tech Crew"},
        {teamName:"meow meow meow meow"},
        {teamName:"The Duo"},
        {teamName:"bit by bit"},
        {teamName:"Rambo"},
        {teamName:"Qubots"},
        {teamName:"team fts"},
        {teamName:"Nishant Team"},
        {teamName:"Pioneers"},
        {teamName:"Diddy"},
        {teamName:"BrainRot"},
        {teamName:"BingBong"},
        {teamName:"LEEVEGA"},
        {teamName:"Bit sized brains"},
        {teamName:"Soft Coders"},
        {teamName:"Lawzzers"},
        {teamName:"Wise Versa"},
        {teamName:"Team FTS"},
        {teamName:"Kasukabe Defense force"},
        {teamName:"Sebs"},
        {teamName:"HackOPS"},
        {teamName:"UNTITLED"},
        {teamName:"CodeCrackerz"},
        {teamName:"Bucky cracks"},
        {teamName:"dev and shubhra"},
        {teamName:"Need Nucleus"},
        {teamName:"CodeVARS"},
        {teamName:"andre ani"},
        {teamName:"haargaye"},
        {teamName:"Varitas"},
        {teamName:"syntax error"},
        {teamName:"DNYX"},
        {teamName:"Anony"},
        {teamName:"Team Connect"},
        {teamName:"TEEN TIGADA KAAM BIGADA"},
        {teamName:"Z-Tech"},
        {teamName:"No Brainers"},
        {teamName:"HACKTIVATORS"},
        {teamName:"CODILATERAL"},
        {teamName:"pookiemons"},
        {teamName:"splash"},
        {teamName:"Newbies"},
        {teamName:"Steindroid"},
        {teamName:"Error 404"},
        {teamName:"not wierd wolves"},
        {teamName:"almost competent"},
        {teamName:"trimpher"},
        {teamName:"Chopped Team"},
        {teamName:"HACK-HER-SQUAD"},
        {teamName:"Alphynx"},
        {teamName:"BYTEFORGE"},
        {teamName:"Code Wizard"},
        {teamName:"widamuyarchi"},
        {teamName:"adaptors"},
        {teamName:"BlackandWhite"},
        {teamName:"fumblebean and friends"},
        {teamName:"sinister69"},
        {teamName:"dora"},
        {teamName:"Pixels"},
        {teamName:"The ONE semicolon"},
        {teamName:"XForce"},
        {teamName:"Volatile"},
        {teamName:"cutie patooties"},
        {teamName:"Code Strom"},
        {teamName:"SPF42o"},
        {teamName:"code crusaders"},
        {teamName:"Dark knight"},
        {teamName:"Noobies"},
        {teamName:"f11"},
        {teamName:"bread"},
        {teamName:"FinElevate"},
        {teamName:"Ekton FC"},
        {teamName:"Studynium-AI"},
        {teamName:"syntax saviour"},
        {teamName:"Digital Divas"},
        {teamName:"NKB Hackers"},
        {teamName:"syntax_error"},
        {teamName:"Web-i-warriors"},
        {teamName:"The solution squad"},
        {teamName:"JBl"},
        {teamName:"NAN0_B1TZ"},
        {teamName:"IOS"},
        {teamName:"Art coders"},
        {teamName:"404 Brain Not Found"},
        {teamName:"The Debuggers"},
        {teamName:"Cookers"},
        {teamName:"Kipnotics"},
        {teamName:"The Boys"},
        {teamName:"Code Ninjas"},
        {teamName:"Include skills.h"},
        {teamName:"Disco Devs"},
        {teamName:"Ctrl+Alt+Del"},
        {teamName:"Techies"},
        {teamName:"Algomist"},
        {teamName:"Buzz Hack"},
        {teamName:"Edgepulse"},
        {teamName:"code wizards"},
        {teamName:"Pookiemons"},
        {teamName:"TrioGeeks"}
    ]
    );
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
                            <tr key={index} className="border-t border-gray-700">
                                <td className="py-2 px-4 w-1/2 border-r border-gray-700">{index + 1}</td>
                                <td className="py-2 px-4 w-1/2">{user.teamName}</td>
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
