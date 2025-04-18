
import { Card, CardContent } from "@/components/ui/card";

type TeamCardProps = {
  team: {
    id: string;
    name: string;
    logo: string;
    primary_color: string;
  };
  pointsData: {
    matches: number;
    points: number;
  };
};

const TeamCard = ({ team, pointsData }: TeamCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div
        className="h-2"
        style={{ backgroundColor: team.primary_color }}
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
                <span className="font-medium">{pointsData.matches}</span> Matches
              </div>
              <div>
                <span className="font-medium">{pointsData.points}</span> Points
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
