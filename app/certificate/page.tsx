"use client";
import { useState } from "react";

const teams: Record<string, string[]> = {
  "-": [
      "Joelle Mary",
      "Tijin Renoy"
  ],
  "1420": [
      "Daksh",
      "Rishab Srivastav ",
      "Arsh Kalra"
  ],
  "203": [
      "Abhishek",
      "Srijan Mishra ",
      "Himanshu Bhatt "
  ],
  "404 Brain Not Found": [
      "Riya Dutta",
      "Vibhav Sharma",
      "Ayush Raghav",
      "Manik Dhillu"
  ],
  "725": [
      "ARPIT RAJVANSHI",
      "Aaditya Arora",
      "Aaryan Manchanda"
  ],
  "92159": [
      "Aditi kar",
      "Harshini Maale",
      "Aarushi Saxena"
  ],
  "Adapters ": [
      "Ishani Ghosh",
      "N Dharanikanth Reddy ",
      "Vaishnavi Durga "
  ],
  "AgroNexus": [
      "Ashahar Yunus Khan",
      "Keya",
      "Daksh Pandey",
      "Anikett"
  ],
  "Algomist": [
      "Krishna Singh Rathore",
      "Harsh Goel",
      "Shanuwaz Shaikh ",
      "Aantarip Dey"
  ],
  "AlmostCompetent": [
      "Yash Dafe",
      "Pankaj Kumar",
      "Jasim Zulfiqar Hamdulay",
      "Krishna Katiyar"
  ],
  "Alphynx": [
      "Madhan",
      "Arun Kumar M P",
      "L S Sailesh",
      "Nitharshan VS"
  ],
  "Amiri": [
      "Naman jain",
      "Kartikey chamoli"
  ],
  "Andre ani": [
      "Raghavan R",
      "HEMA SURYA",
      "Rishwanth J",
      "Anirudhan R"
  ],
  "Anony": [
      "Vansh Arora",
      "Veer Pratap Singh",
      "Niall Francis Ajeet Dcunha",
      "Abhinav Kumar Singh"
  ],
  "Art coders": [
      "RINUVARSHINI KR",
      "Tharuniga A",
      "Gnanamrutha"
  ],
  "Ashes": [
      "Dharani S",
      "Dharshan K",
      "Hari prasath R"
  ],
  "AuraDev": [
      "Harsh Chauhan",
      "Manav Bajaj",
      "Shreedhar Sharma",
      "Harsh"
  ],
  "BIT SIZED BRAINS": [
      "G Preethika",
      "Pavitra V M",
      "Vivegaa P K",
      "R.Harini"
  ],
  "Billiance": [
      "Tamil Aadhavan",
      "Mohamed Basheer",
      "Keshava A K",
      "Sadu Venkatesh"
  ],
  "Billiance 2": [
      "Jude Allen ",
      "Vaikundamani G"
  ],
  "BingBong": [
      "Abeer Gupta",
      "Pratham Tandon ",
      "Sanskruti Satish Shete",
      "Vedant Khare "
  ],
  "Bit by bit": [
      "Sakshi Arora",
      "Umang Doshi",
      "Priya Gupta"
  ],
  "BlackandWhite": [
      "Sumith",
      "Anish Ranjan "
  ],
  "BrainRot": [
      "Ayush Agrawal",
      "Sounak Maity ",
      "Rajnish Kumar Yadav ",
      "Abhishek sahu "
  ],
  "Bread": [
      "Sarthak Das",
      "tej gandhi",
      "Mukhul elango"
  ],
  "Butter Chicken": [
      "pranav parab",
      "dakshin ghai"
  ],
  "Buzz Hack": [
      "Abhimanyu Rai",
      "Veedushi Garg",
      "Swastik Mohanty ",
      "Manav Agarwal"
  ],
  "Byte Quads": [
      "Dhairya Tiwari",
      "Amrit Raj",
      "Prasun Singh",
      "Shivam Gupta"
  ],
  "ByteForge": [
      "Kumar Shaswat",
      "Rithvik Sundar",
      "Lakshay Singh",
      "Harsh tayal "
  ],
  "CacheMe": [
      "Vishwa Thangapandiyan ",
      "Sanjay Sivakumar",
      "PRANJAL GIRI"
  ],
  "Code Duet": [
      "haswanth raj",
      "V Deepika"
  ],
  "Code Ninjas": [
      "Vishvajit kumar ",
      "Aditya Patil",
      "VINAY KUMAR ",
      "Tekchand "
  ],
  "Code Storm": [
      "Piyush Agrawal",
      "Mohammad Owais",
      "Mayank "
  ],
  "Code Wizards ": [
      "Sai Vignesh S ",
      "Gowtham R",
      "N varun",
      "BRAGADEESHWARAN N T"
  ],
  "Code crusaders": [
      "HARINI L S",
      "V.Trishamani",
      "Yazhini B"
  ],
  "CodeCrackerz": [
      "Abdullah Mustafa",
      "Lokith S"
  ],
  "CodeVARS": [
      "Saksham Rao ",
      "Vedant Singh ",
      "Arpita Supkar",
      "Rachna Mohapatra "
  ],
  "Codecure": [
      "Priyesh Kumar Jha",
      "Anshuman"
  ],
  "Codilateral": [
      "Roshan Joseph Roy",
      "Anshuman Patra ",
      "Abhishek kumar",
      "Jyotirmaya Bhanja"
  ],
  "Cookers": [
      "Vaibhav Vishwakarma",
      "ATHARV AGARWAL "
  ],
  "Ctrl+Alt+Del": [
      "Suhani rai",
      "Sharvani Parate",
      "Divyansha Mayank"
  ],
  "Cutie patooties": [
      "vishal",
      "Harshavardhan ",
      "A Nikilaa",
      "Rakesh.S.D"
  ],
  "DNYX": [
      "PRIYADARSHINI K",
      "NITHYA S",
      "K Mahalakshmi",
      "Shashanth K"
  ],
  "Dark knight ": [
      "K.samuel jayson ",
      "Nithyashree S"
  ],
  "Dev": [
      "Aryan Laxaman ",
      "Gauri"
  ],
  "Dev And Shubhra": [
      "Shubhra Jha ",
      "Dev Tyagi "
  ],
  "Digital Divas": [
      "Madhumitha Ravichandran ",
      "Infanta Lenency O",
      "CHANDRA.S"
  ],
  "Digital Shinobi": [
      "Abhijeet Pandey",
      "Goutham Srinath",
      "Benita Grace",
      "santhosh"
  ],
  "Disco Devs": [
      "Harika",
      "Goru Deepika",
      "P.Trishalee",
      "Pradakshina "
  ],
  "Dora": [
      "Anuj Agarwal",
      "Pranjal Rai",
      "Sanket Agrawal"
  ],
  "ERROR-404": [
      "Vishesh Kumar Singh ",
      "Kavya Mehta",
      "Karan Mittal ",
      "Divyansh Mittal"
  ],
  "Edgepulse": [
      "Ayush Awasthi",
      "Shaik Junaid Rizwan",
      "Maria Suhail"
  ],
  "Ekton FC": [
      "Ekanath DV",
      "S. Mohamed Faizal ",
      "Kishan V",
      "Rohan Julius"
  ],
  "Error 404": [
      "Trisha ",
      "Salman Asif Malvasi"
  ],
  "F11": [
      "Akash S",
      "harishbalaji",
      "B.GURUCHARAN",
      "Y. Shanthosh shiva"
  ],
  "Fantastic Four": [
      "J JOHN BOSCO JOSEPH",
      "P S SUSHMITHA ",
      "Navithraj D K",
      "Kanish Karthik K C"
  ],
  "FinElevate": [
      "Eshita Gupta ",
      "Arjun Devraj"
  ],
  "Four chwenchy": [
      "Aryan Sharma",
      "Nikunj Maskara",
      "Angshuman Choudhury ",
      "Dhruv Choudhary"
  ],
  "Fumblebean and Friends": [
      "Antony Johnson",
      "Dyumna Karthikeyan",
      "Srinithi",
      "Neeraj Prasanna"
  ],
  "G": [
      "Aaditya jaiswal",
      "Aadit Mishra"
  ],
  "GigaBaes": [
      "Annie Mahajan",
      "Devika ",
      "Raichel Benny",
      "Ananya Shailesh"
  ],
  "GigaBois": [
      "Arhaan Penwala",
      "Krish Chauhan ",
      "Aditya Bharti ",
      "Prakhar Gupta"
  ],
  "HACKERS": [
      "Spandan Chakraborty",
      "aanya kachroo"
  ],
  "HACKTIVATORS": [
      "ADARSH H PILLAI",
      "Ashwin Kumaran Ku",
      "Thanish",
      "Shashankasekar B"
  ],
  "HackOps": [
      "Fauziyya H",
      "Renusri",
      "Jeeva K",
      "Thamizhazhagan S"
  ],
  "Hack_her_squad": [
      "SAHASRA ",
      "Diksha Sharma ",
      "Shubhra Negi",
      "Khyati"
  ],
  "Hackoholics": [
      "Om Kharche ",
      "Samayank Goel",
      "DAKSH SINGLA ",
      "Sarthak Luhadia"
  ],
  "Hackstreet ": [
      "Amit Kumar Singh",
      "Anantveer Singh Beniwal",
      "Aryan Yadav"
  ],
  "IOS": [
      "Sumit Kumar Patnaik ",
      "Yerav Aaron Charan",
      "ADITYARAJ SHRIVASTAVA",
      "Anubhav Jha"
  ],
  "JBL": [
      "Madhav jindal",
      "Akram Chauhan ",
      "Sandeep Pradyot Swami"
  ],
  "Jaats On Duty": [
      "ASHISH ",
      "Ayush Bist",
      "Akshat Raj",
      "Ritik Sheoran "
  ],
  "Kasukabe Defence Force": [
      "Prannavraj V S",
      "R NAGA ARJUN"
  ],
  "Kipnotics": [
      "ISHANTH LEEMAN I",
      "MADHESH",
      "MUTHUKUMARAN K",
      "M.Vishal"
  ],
  "Lawzzers": [
      "Srimadhavan G",
      "Giridharan R",
      "Raamiz Hussain Shikoh",
      "Shantanu"
  ],
  "Learners": [
      "Shikhar Modanwal ",
      "Saket Kumar Pandey",
      "Akshat Rastogi "
  ],
  "Leevega": [
      "Ayushman Tripathi",
      "Swayam Kapoor"
  ],
  "MVIV": [
      "H Varun Rathnam",
      "Ishan sharma",
      "Milind Ranjan ",
      "Vaibhav Agrawal"
  ],
  "Malaaq": [
      "Abhinav Kuruvila Joseph",
      "Gokul Krishna Rajeev Nair ",
      "Harinandan M",
      "Gauri Sankar Menothparambil Sajith"
  ],
  "Market Minds": [
      "Harsh Narendra Singh ",
      "Aakansh Gupta",
      "Dipanshi Tripathi",
      "Vijval shah"
  ],
  "NAN0_B1TZ": [
      "Vibhaansh Bhardwaj",
      "Atharv Verma",
      "Parth Patil",
      "Pathi Guru Anirudh"
  ],
  "NDRT tech": [
      "Neel",
      "rohit tarur"
  ],
  "NKB Hackers ": [
      "RAGHAVAN S",
      "Umar Sharuk M",
      "Kisanth",
      "Naveen Kasi S"
  ],
  "Neovate": [
      "Nikhilesh C V ",
      "Aniruth Narayanan",
      "Akil",
      "Kishore K G"
  ],
  "Nerd nucleus": [
      "Lalith adithiya",
      "CHARIS CHRIS R S",
      "C. Francis David"
  ],
  "Newbies": [
      "Ujjwal shukla",
      "Vasu",
      "Vinayak Mishra ",
      "Ankush Kumar "
  ],
  "Nishant team": [
      "Nishant Pandey",
      "Vaishnavi Naidu",
      "Rajdeep Aich"
  ],
  "No Brainers": [
      "Neha Reddy",
      "Adithya",
      "Koppesh P",
      "SHAIK ABDUL KHADER MASTHAN "
  ],
  "Noobies": [
      "S Arya ",
      "Joel J Chalappuram",
      "G Varun"
  ],
  "NotWierd Wolves": [
      "Srivan Reddy Kommera",
      "Mehthab K P"
  ],
  "Null pointers": [
      "pushti mehta",
      "Riya Viradiya",
      "rashi jain"
  ],
  "PANDAS": [
      "Debanjan Baidya",
      "Kumari Astha"
  ],
  "Pioneers": [
      "keerthana",
      "TKJ SUDHEEKSHA ",
      "Mukhesh",
      "Aayush",
      "Parun Sethupathy",
      "Aravindhan "
  ],
  "Pixels": [
      "Krishna Kumar S",
      "Mohamed Ashwak M",
      "MOULIE S",
      "Prem Kumar N"
  ],
  "Pookiemons": [
      "Shreyas Kumar ",
      "Ayush Upadhyay ",
      "Durvank Mahesh Gade"
  ],
  "Qubots": [
      "Harish Karthick S",
      "jayavarsan",
      "Jesudas Zion",
      "Prasanth"
  ],
  "RNM": [
      "Maitreyee Maheshwari",
      "Rudraditya Thakur"
  ],
  "Rambo": [
      "Saisabarish ",
      "Bhargav Kamath ",
      "Keshav ",
      "Rithesh Sundar"
  ],
  "Royals": [
      "Vedant V Sharma ",
      "Prayagraj Mohanty"
  ],
  "SPF42o": [
      "Sooraj Naarayanan",
      "Faiza Reza",
      "Prabal"
  ],
  "Sebs": [
      "Nivedita.S",
      "Priya",
      "K Keertana "
  ],
  "Sinister69": [
      "Argha Manna",
      "Daksh goyal",
      "Gaurav Mahesh ",
      "Shivanshu Singh"
  ],
  "Soft Coders": [
      "Nikhil Bansal V",
      "Tejasvat R"
  ],
  "Splash": [
      "Devraj Suvarna",
      "Mohammad Kaif",
      "Pronoy Ghosh",
      "Amal Joji"
  ],
  "Steindroid": [
      "Vishwas kumar",
      "Shubham Valecha",
      "Taslim Ahmad",
      "Piyush Kumar"
  ],
  "Studynium.AI": [
      "Kavin Karthik A",
      "Maadeshwar D V",
      "Harish Neralla"
  ],
  "Swap Trio": [
      "Venkata Sai Shailendra Raju Gundarapu ",
      "Mahargha Kundu ",
      "Sai Aravind"
  ],
  "Syntax Error": [
      "Chirag Jamariya ",
      "Ahmed Shaheer ",
      "Naveen Menon",
      "V Srivatsan"
  ],
  "Syntax Saviors": [
      "Dhruv Tiwari",
      "Lakshya Sharma",
      "Vaibhav joshi ",
      "Siddhant Singhal"
  ],
  "Team Connect": [
      "Saanvi Singh ",
      "Sabhyata Verma",
      "Harsh Vardhan ",
      "Voduri Sathvik Bhaskar"
  ],
  "Team FTS": [
      "Mohammed Sahil Rizvi",
      "Vedant Kudalkar ",
      "Aarsh jain",
      "Hardik sondhi "
  ],
  "Team McAloo tikki": [
      "Sanyam Jindal",
      "Aryan",
      "simarpreet singh "
  ],
  "Team Trimpher": [
      "Shubham Kumar",
      "Ashish Kumar",
      "Anand kumar",
      "Sanskar kumar "
  ],
  "Tech crew": [
      "Ashmitha.G.M",
      "Loga Dharani.P.M",
      "Luckwin"
  ],
  "Techies": [
      "himangi agarwal",
      "Anusha Mandal",
      "Suhani"
  ],
  "Teen Tigada Kaam Bigada": [
      "Ketav Sodhi",
      "Sujith Krishna Chennupati",
      "riyan"
  ],
  "The Duo": [
      "Arsh sinha ",
      "Jivitesh Sharma"
  ],
  "The ONE semicolon ": [
      "CN Swetha ",
      "Madhumitha",
      "Shrinithi .V"
  ],
  "The boys": [
      "Harshit Goswami ",
      "Yash Krishna Dixit"
  ],
  "The debuggers": [
      "daya lakshmi",
      "Gayathri Brijesh ",
      "Shreya Krishna",
      "Nisha purushothaman"
  ],
  "The solution squad": [
      "Tamilselvan A",
      "S. JEEVITH ",
      "Vignesh Kumar. S",
      "Siva Subramaniyam"
  ],
  "TrioGeeks": [
      "Shruti S",
      "Ramya Nakshathra",
      "Srivarsha S"
  ],
  "UNTITLED ": [
      "Malaiesun S",
      "Sam Stephen P",
      "Pavithran P",
      "B.Mukund"
  ],
  "Veritas": [
      "Abhishek Bhardwaj",
      "Anuvind A P",
      "Archit Vishnoi",
      "SHAARAD JARANDIKAR "
  ],
  "Volatile": [
      "Allwin ",
      "Aswin Satheesh",
      "Gaurav Ramasubramaniam ",
      "BHARATH RAJ"
  ],
  "Widamuyarchi Warriors": [
      "Dharani Tharan D",
      "Sushil Thrambakesh Ramkumar",
      "Thejeesh.G"
  ],
  "Wise Versa": [
      "CHANDRAMOHITH.P ",
      "Nikhitha K V",
      "R.G.NIKITHA",
      "Raja Meenakshi Sundaram G"
  ],
  "XForce": [
      "Vikash k",
      "Subburayalu ",
      "sahil kk",
      "Sohan"
  ],
  "Z-Tech": [
      "Badri",
      "Kishore",
      "Monesh",
      "Shaswath"
  ],
  "bucky cracks": [
      "Sowmyaasri ",
      "Sakthi priya.A"
  ],
  "chopped team ": [
      "Kalyan ram chodabattula",
      "Jeffrey Samuel ",
      "Hara Sameeraj Kuppili ",
      "Ashwanth"
  ],
  "diddy": [
      "Monish",
      "Sahil Agrawal "
  ],
  "emcXfyi": [
      "Naman Goel",
      "Sanshita "
  ],
  "haargaye": [
      "sushrut",
      "Devansh Khurana "
  ],
  "include Skills.h": [
      "Samarth shah",
      "palurugurudeep ",
      "Yubair Rahman Hazari",
      "Bhuvan Nayak"
  ],
  "iphone": [
      "Sarthak Papneja",
      "Aakanksha Rai",
      "Suyash Harshvardhana",
      "rahul joshi"
  ],
  "kingice": [
      "Bhavya Sahni",
      "Manas Malik",
      "Garv Ahuja",
      "Anurup Dey"
  ],
  "meow meow meow meow": [
      "Kushagra Singh",
      "Aaryan Dogra ",
      "Viju Sanjai",
      "Amritha S"
  ],
  "pseudo apt": [
      "Aryan Sharma",
      "Adith Biju",
      "Vinit yadav",
      "Aadil Hasan"
  ],
  "syntax_error": [
      "Akshith Reddy",
      "Syed Azaan ",
      "Dhruv Agnihotri"
  ],
  "web-i-warriors": [
      "Shivam Pandey",
      "Ashmita Das"
  ],
  "zimz": [
      "Stuti Agarwal",
      "Vanshika Karun",
      "Alok Patel"
  ]
};

const CertificateGenerator = () => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedMember, setSelectedMember] = useState("");
  const [certificateUrl, setCertificateUrl] = useState("");

  // Load the font dynamically
  const loadFont = async () => {
    const font = new FontFace(
      "Great Vibes",
      "url(https://fonts.gstatic.com/s/greatvibes/v15/RWmMoKWR9v4ksMfaWd_JN9XFiaE.ttf)"
    );
    await font.load();
    document.fonts.add(font);
  };

  const handleGenerate = () => {
    if (!selectedTeam || !selectedMember) return;
    generateCertificate(selectedMember);
  };

  const generateCertificate = async (name: string) => {
    await loadFont(); // Ensure font is loaded before drawing

    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const backgroundImage = new Image();
    backgroundImage.src = "/template/certificate-template.png";
    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#82b5c6";
      ctx.font = "55px 'Great Vibes', cursive";
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

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <div className="z-10 flex w-full max-w-lg flex-col gap-6 md:pb-28 mt-5">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="flex flex-wrap font-secondary text-[5.5vw] lowercase tracking-wider text-white sm:py-1 sm:text-[5.7vw] md:text-[38px]">
            Download&nbsp;
            <span className="whitespace-nowrap">Certificate</span>
          </span>
        </div>

        <div className="space-y-4 font-tertiary text-primary text-xl font-bold">
          <select
            className="w-full p-2 border rounded bg-transparent"
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            <option value="" className="bg-transparent text-black font-bold">
              Select Team
            </option>
            {Object.keys(teams).map((team) => (
              <option key={team} value={team} className="bg-transparent text-black font-bold">
                {team}
              </option>
            ))}
          </select>

          <select
            className="w-full p-2 border rounded bg-transparent"
            onChange={(e) => setSelectedMember(e.target.value)}
            disabled={!selectedTeam}
          >
            <option value="" className="bg-transparent text-black font-bold">Select Member</option>
            {selectedTeam &&
              teams[selectedTeam]?.map((member) => (
                <option key={member} value={member} className="bg-transparent text-black font-bold">
                  {member}
                </option>
              ))}
          </select>

          <button
            className="w-full p-2 bg-blue-500 text-white rounded disabled:opacity-50"
            onClick={handleGenerate}
            disabled={!selectedMember}
          >
            Generate Certificate
          </button>

          {certificateUrl && (
            <div className="mt-4">
              <img src={certificateUrl} alt="Generated Certificate" className="w-full" />
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
