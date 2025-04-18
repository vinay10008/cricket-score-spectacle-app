
import Navbar from "@/components/Navbar";
import LiveMatch from "@/components/LiveMatch";
import PointsTable from "@/components/PointsTable";
import MatchSchedule from "@/components/MatchSchedule";
import TeamCard from "@/components/TeamCard";
import { useTeams } from "@/hooks/useTeams";
import { usePointsTable } from "@/hooks/usePointsTable";
import { getLiveMatches } from "@/data/matches";

const Index = () => {
  const { data: teams, isLoading: teamsLoading } = useTeams();
  const { data: pointsTable, isLoading: pointsLoading } = usePointsTable();
  const liveMatches = getLiveMatches(); // Get live matches from the data function

  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm" />
        <img 
          src="/ipl-background.jpg" 
          alt="IPL Stadium" 
          className="h-full w-full object-cover"
        />
      </div>
      
      <Navbar />
      
      <main className="container relative z-10 mx-auto flex-1 px-4 py-8">
        {/* IPL Logo in the middle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
          <img 
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPL-logo.png" 
            alt="IPL Logo" 
            className="w-96"
          />
        </div>

        {/* Hero section with live match */}
        <section className="mb-10">
          <h1 className="mb-6 text-center text-4xl font-bold text-ipl-dark">
            IPL <span className="text-ipl-orange">2025</span>
          </h1>
          
          {liveMatches.length > 0 && (
            <div className="mx-auto max-w-xl">
              <h2 className="mb-4 text-center text-xl font-semibold text-ipl-dark">
                Live Match
              </h2>
              <LiveMatch match={liveMatches[0]} />
            </div>
          )}
        </section>

        {/* Matches & Points Table */}
        <section className="mb-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-ipl-dark">
              Match Schedule
            </h2>
            <MatchSchedule />
          </div>
          
          <div>
            <h2 className="mb-4 text-xl font-semibold text-ipl-dark">
              Standings
            </h2>
            <PointsTable />
          </div>
        </section>

        {/* Teams */}
        <section className="mb-10">
          <h2 className="mb-6 text-center text-2xl font-semibold text-ipl-dark">
            Teams
          </h2>
          {teamsLoading || pointsLoading ? (
            <div className="text-center text-ipl-dark">Loading teams...</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
              {teams?.map((team) => {
                const teamPoints = pointsTable?.find(
                  (p) => p.team_id === team.id
                );
                return (
                  <TeamCard
                    key={team.id}
                    team={team}
                    pointsData={{
                      matches: teamPoints?.matches ?? 0,
                      points: teamPoints?.points ?? 0,
                    }}
                  />
                );
              })}
            </div>
          )}
        </section>
      </main>

      <footer className="relative z-10 bg-ipl-dark py-4 text-center text-sm text-white">
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
