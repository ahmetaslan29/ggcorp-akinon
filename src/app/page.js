import { Application } from "@/component/application";
import HeroBanner from "@/component/hero-banner";
import Rules from "./rules/page";
import TournamentPage from "@/component/rules";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
    <HeroBanner></HeroBanner>
     <TournamentPage></TournamentPage>
    </main>
  );
}
