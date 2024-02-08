import type { Metadata } from "next";
import "@/app/globals.css";
import { amberyGarden, cakra, turretRoad } from "@/public/fonts";
import Copyright from "@/components/copyright";
import { Connect, SocialConnect } from "@/components/connect";

export const metadata: Metadata = {
  title: "Designathon '24",
  description:
    "Designathon conducted as a part of Tech Fest organized by Christ College of Engineering, Irinjalakuda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/designathon-logo.svg" />
        <link
          href="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/css/diagramwf.webflow.c946343f1.min.css"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${turretRoad.variable} ${cakra.variable} ${amberyGarden.variable} w-screen overflow-x-clip bg-dark antialiased`}
      >
        <div className="gradient-wrapper -mb-[5000px] h-fit">
          <div className="galaxy-background"></div>
          <div className="overflow-hidden">
            <div className="sectionHero bg-dark">
              {children}

              <footer>
                <Connect />
                <SocialConnect />
                <Copyright />
              </footer>

              <div className="solar-system">
                {/* <div
                  data-w-id="194ce8b5-5645-d6a6-9816-0abcd86b5830"
                  data-is-ix2-target="1"
                  className="absolute right-[345px] top-[178px] z-10 h-[400px] w-[400px]"
                  data-animation-type="lottie"
                  data-src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6438c81cfbc7d4110bf11d9b_night-sky.lottie"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-renderer="svg"
                  data-default-duration="2.5"
                  data-duration="0"
                ></div> */}
                {/* <div
                  data-w-id="d55285b3-4324-2f51-3ced-5ea658370a50"
                  data-is-ix2-target="1"
                  className="shooting-star-2"
                  data-animation-type="lottie"
                  data-src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6438c81cfbc7d4110bf11d9b_night-sky.lottie"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-renderer="svg"
                  data-default-duration="2.5"
                  data-duration="0"
                ></div>
                <div
                  data-w-id="6b89d052-1095-8345-512e-7948955c495f"
                  data-is-ix2-target="1"
                  className="shooting-star-3"
                  data-animation-type="lottie"
                  data-src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6438c81cfbc7d4110bf11d9b_night-sky.lottie"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-renderer="svg"
                  data-default-duration="2.5"
                  data-duration="0"
                ></div> */}
                {/* <div
                  data-w-id="00e43aad-09e5-73f7-9e62-c89db3783cfb"
                  data-is-ix2-target="1"
                  className="shooting-star-4"
                  data-animation-type="lottie"
                  data-src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6438c81cfbc7d4110bf11d9b_night-sky.lottie"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-renderer="svg"
                  data-default-duration="2.5"
                  data-duration="0"
                ></div> */}
                {/* <div
                  data-w-id="f249ea73-94c4-3c46-28f1-a863d1489b7b"
                  data-is-ix2-target="1"
                  className="shooting-star-5"
                  data-animation-type="lottie"
                  data-src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6438c81cfbc7d4110bf11d9b_night-sky.lottie"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-renderer="svg"
                  data-default-duration="2.5"
                  data-duration="0"
                ></div>
                <div
                  data-w-id="57439795-4a99-2138-99aa-6b25dafa8d8a"
                  data-is-ix2-target="1"
                  className="shooting-star-5"
                  data-animation-type="lottie"
                  data-src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6438c81cfbc7d4110bf11d9b_night-sky.lottie"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-renderer="svg"
                  data-default-duration="2.5"
                  data-duration="0"
                ></div> */}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
