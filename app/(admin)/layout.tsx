import Navbar from "../components/Navbar";
import { Kanit } from "next/font/google";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#F4F4F4]">
      <Navbar></Navbar>
      {children}
    </div>
  );
}
