import Image from 'next/image';

export default function MediaPromoBlade() {
  return (
    <section
      id="home-section-slaywithstyle"
      className="relative bg-cover w-full bg-center bg-no-repeat text-white pt-10"
      style={{
        backgroundImage:
          "url('/rift-bg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0 text-center lg:text-left">
          <p className="text-lg font-semibold uppercase">RAKİPLERİNİ TARZINLA</p>
          <h1 className="text-4xl font-bold">ALT ET</h1>
          <p className="mt-4 text-lg">
            En sevdiğin şampiyonların kostümleriyle tarzını yansıt.
          </p>
          <a
            href="https://signup.leagueoflegends.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Hemen Oyna
          </a>
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
