import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import SideBar from "@/components/Home/SideBar/SideBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Roboto({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Personnal App",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${font.variable} h-full antialiased`}
      // className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-full  bg-white04 grid grid-cols-[20%_80%] w-full ">
        <aside className=" sticky bg-white01 top-0 left-0 h-screen right-0">
          <SideBar />
        </aside>
        <div className=" min-w-0">
          <ResponsiveNav />
          {children}
        </div>
      </body>
      {/* <body className="min-h-screen bg-white04 grid grid-cols-[20%_80%] w-full">
        <aside className="sticky top-0 h-screen">
          <SideBar />
        </aside>

        <div className="min-w-0">
          <ResponsiveNav />
          {children}
        </div>
      </body> */}
    </html>
  );
}
{
  /* Sidebar */
}

{
  /* Partie droite */
}
