
import { Card, CardContent } from "@/components/ui/card";
import { Team } from "@/data/teams";

type TeamCardProps = {
  team: Team;
};

const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div
        className="h-2"
        style={{ backgroundColor: team.primaryColor }}
      ></div>
      <CardContent className="p-4">
        <div className="flex items-center">
          <div className="mr-4 h-16 w-16 overflow-hidden rounded-full border-2 border-gray-200">
            <img
              src={team.logo}
              alt={team.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">{team.name}</h3>
            <div className="mt-1 flex space-x-4 text-sm">
              <div>
                <span className="font-medium">{team.matches}</span> Matches
              </div>
              <div>
                <span className="font-medium">{team.points}</span> Points
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
