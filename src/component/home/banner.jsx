import Image from "next/image";
import { Button } from "../web-components/button";

export default function MediaPromoBlade() {
  return (
    <section
      id="home-section-slaywithstyle"
      className="relative bg-cover w-full bg-center bg-no-repeat text-white pt-10"
      style={{
        backgroundImage: "url('/rift-bg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0 text-center lg:text-left px-4">
          <p className="text-lg font-semibold uppercase">BÜYÜK YARIŞ</p>
          <h1 className="text-4xl font-bold">BAŞLIYOR</h1>
          <p className="mt-4 text-lg">
            En iyilerin karşı karşıya geldiği turnuvada yerini al!
          </p>
          <Button
            href="/application"
            rel="noopener noreferrer"
            className="text-white inline-block mt-6 px-6 py-3 !bg-[#4B4B4B] font-semibold rounded-md border-transparent"
          >
            Hemen Oyna
          </Button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/akali.png"
            alt="Featured Media"
            width={720}
            height={720}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
