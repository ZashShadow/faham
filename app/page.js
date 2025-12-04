import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/dashboard"><button type="button" className="bg-[#1F244E] text-white px-5 py-2 rounded-xl cursor-pointer">Open Dashboard</button></Link>
    </div>
  );
}
