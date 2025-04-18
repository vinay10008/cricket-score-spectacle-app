
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { getCompletedMatches, getLiveMatches, getUpcomingMatches } from "@/data/matches";
import { getTeamById } from "@/data/teams";
import { format, parseISO } from "date-fns";

const MatchSchedule = () => {
  const liveMatches = getLiveMatches();
  const upcomingMatches = getUpcomingMatches();
  const completedMatches = getCompletedMatches();

  return (
    <Tabs defaultValue="live" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-ipl-dark">
        <TabsTrigger value="live" className="data-[state=active]:bg-ipl-blue">
          Live
        </TabsTrigger>
        <TabsTrigger value="upcoming" className="data-[state=active]:bg-ipl-blue">
          Upcoming
        </TabsTrigger>
        <TabsTrigger value="completed" className="data-[state=active]:bg-ipl-blue">
          Completed
        </TabsTrigger>
      </TabsList>

      <TabsContent value="live" className="mt-4">
        {liveMatches.length === 0 ? (
          <Card className="bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center text-white">
              No live matches at the moment.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {liveMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </TabsContent>

      <TabsContent value="upcoming" className="mt-4">
        {upcomingMatches.length === 0 ? (
          <Card className="bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center text-white">
              No upcoming matches scheduled.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {upcomingMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </TabsContent>

      <TabsContent value="completed" className="mt-4">
        {completedMatches.length === 0 ? (
          <Card className="bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center text-white">
              No completed matches yet.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {completedMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

const MatchCard = ({ match }: { match: any }) => {
  const team1 = getTeamById(match.team1Id);
  const team2 = getTeamById(match.team2Id);

  if (!team1 || !team2) return null;

  const formattedDate = format(parseISO(match.date), "MMM dd, yyyy");
  const formattedTime = format(parseISO(match.date), "hh:mm a");

  return (
    <Card className="overflow-hidden bg-white/10 backdrop-blur-sm">
      <CardHeader className="bg-ipl-dark/60 p-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-white">
            Match {match.matchNumber}
          </CardTitle>
          <div className="flex items-center text-xs text-gray-300">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {formattedDate} | {formattedTime}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 flex-col items-center">
            <div className="h-12 w-12 overflow-hidden rounded-full">
              <img src={team1.logo} alt={team1.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-2 text-center">
              <div className="font-medium text-white">{team1.shortName}</div>
              {match.innings1 && match.innings1.teamId === team1.id && (
                <div className="text-sm text-white">
                  {match.innings1.runs}/{match.innings1.wickets}
                </div>
              )}
            </div>
          </div>

          <div className="mx-4 text-center">
            <div className="text-xl font-bold text-white">vs</div>
            <div className="mt-2 text-xs text-gray-300">{match.venue}</div>
          </div>

          <div className="flex flex-1 flex-col items-center">
            <div className="h-12 w-12 overflow-hidden rounded-full">
              <img src={team2.logo} alt={team2.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-2 text-center">
              <div className="font-medium text-white">{team2.shortName}</div>
              {match.innings1 && match.innings1.teamId === team2.id && (
                <div className="text-sm text-white">
                  {match.innings1.runs}/{match.innings1.wickets}
                </div>
              )}
              {match.innings2 && match.innings2.teamId === team2.id && (
                <div className="text-sm text-white">
                  {match.innings2.runs}/{match.innings2.wickets}
                </div>
              )}
            </div>
          </div>
        </div>

        {match.status === "COMPLETED" && match.result && (
          <div className="mt-4 text-center text-sm font-medium text-ipl-orange">
            {match.result}
          </div>
        )}

        {match.status === "LIVE" && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
              <span className="mr-1 h-2 w-2 animate-pulse rounded-full bg-white"></span>
              LIVE
            </div>
          </div>
        )}

        {match.status === "UPCOMING" && (
          <div className="mt-4 text-center text-sm font-medium text-gray-300">
            Match yet to begin
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MatchSchedule;
