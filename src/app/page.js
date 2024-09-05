import { Application } from "@/component/application";
import Rules from "./rules/page";
import TournamentPage from "@/component/rules";
import HeroBanner from "@/component/home/hero-banner";
import MediaPromoBlade from "@/component/home/banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
    <HeroBanner></HeroBanner>
     <TournamentPage></TournamentPage>
     <MediaPromoBlade></MediaPromoBlade>
    </main>
  );
}
