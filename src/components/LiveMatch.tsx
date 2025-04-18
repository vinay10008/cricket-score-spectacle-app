
import { Card, CardContent } from "@/components/ui/card";
import { Match } from "@/data/matches";
import { getTeamById } from "@/data/teams";
import { cn } from "@/lib/utils";

type LiveMatchProps = {
  match: Match;
};

const LiveMatch = ({ match }: LiveMatchProps) => {
  const team1 = getTeamById(match.team1Id);
  const team2 = getTeamById(match.team2Id);

  if (!team1 || !team2) return null;

  const battingTeamId = match.innings2 ? match.innings2.teamId : match.innings1?.teamId;
  const team1IsBatting = battingTeamId === team1.id;
  const team2IsBatting = battingTeamId === team2.id;

  return (
    <Card className="overflow-hidden bg-white/10 shadow-lg backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="flex justify-between bg-ipl-dark p-3">
          <div>
            <span className="font-semibold text-white">Match {match.matchNumber}</span>
          </div>
          <div className="flex items-center text-white">
            <span className="live-dot mr-2"></span>
            <span className="text-sm font-medium">LIVE</span>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <div className="text-sm text-gray-400">{match.venue}</div>
          </div>

          <div className="space-y-4">
            <TeamScore 
              team={team1} 
              score={match.innings1?.teamId === team1.id ? match.innings1 : match.innings2} 
              isBatting={team1IsBatting}
            />
            
            <TeamScore 
              team={team2} 
              score={match.innings1?.teamId === team2.id ? match.innings1 : match.innings2} 
              isBatting={team2IsBatting}
            />
          </div>

          {match.result ? (
            <div className="mt-4 text-center text-sm font-medium text-ipl-orange">{match.result}</div>
          ) : (
            <div className="mt-4 text-center text-sm font-medium text-white">In Progress</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

type TeamScoreProps = {
  team: any;
  score?: any;
  isBatting: boolean;
};

const TeamScore = ({ team, score, isBatting }: TeamScoreProps) => (
  <div className={cn("flex items-center justify-between", isBatting && "font-bold")}>
    <div className="flex items-center">
      <div className="mr-3 h-8 w-8 overflow-hidden rounded-full">
        <img src={team.logo} alt={team.name} className="h-full w-full object-cover" />
      </div>
      <div>
        <div className="font-semibold text-white">{team.shortName}</div>
      </div>
      {isBatting && (
        <div className="ml-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-ipl-orange"></span>
        </div>
      )}
    </div>
    <div className="text-right text-white">
      {score ? (
        <div>
          {score.runs}/{score.wickets} ({score.overs} ov)
        </div>
      ) : (
        <div>Yet to bat</div>
      )}
    </div>
  </div>
);

export default LiveMatch;
