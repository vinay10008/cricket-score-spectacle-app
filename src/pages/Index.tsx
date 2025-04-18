import Navbar from "@/components/Navbar";
import LiveMatch from "@/components/LiveMatch";
import PointsTable from "@/components/PointsTable";
import MatchSchedule from "@/components/MatchSchedule";
import TeamCard from "@/components/TeamCard";
import { getLiveMatches } from "@/data/matches";
import { teams } from "@/data/teams";

const Index = () => {
  const liveMatches = getLiveMatches();

  return (
    <div className="flex min-h-screen flex-col bg-ipl-stadium bg-cover bg-fixed bg-center">
      <Navbar />
      
      <main className="container mx-auto flex-1 px-4 py-8">
        {/* Hero section with live match */}
        <section className="mb-10">
          <h1 className="mb-6 text-center text-4xl font-bold text-white">
            IPL <span className="text-ipl-orange">2025</span>
          </h1>
          
          {liveMatches.length > 0 && (
            <div className="mx-auto max-w-xl">
              <h2 className="mb-4 text-center text-xl font-semibold text-white">
                Live Match
              </h2>
              <LiveMatch match={liveMatches[0]} />
            </div>
          )}
        </section>

        {/* Matches & Points Table */}
        <section className="mb-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-white">
              Match Schedule
            </h2>
            <MatchSchedule />
          </div>
          
          <div>
            <h2 className="mb-4 text-xl font-semibold text-white">
              Standings
            </h2>
            <PointsTable />
          </div>
        </section>

        {/* Teams */}
        <section className="mb-10">
          <h2 className="mb-6 text-center text-2xl font-semibold text-white">
            Teams
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {teams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-ipl-dark py-4 text-center text-sm text-white">
        <div className="container mx-auto">
          <p>© 2025 IPL Score App. All rights reserved.</p>
          <p className="mt-1 text-xs text-gray-400">
            This is a demo app and not affiliated with BCCI or IPL.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
