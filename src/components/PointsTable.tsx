
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { teams } from "@/data/teams";

const PointsTable = () => {
  const sortedTeams = [...teams].sort((a, b) => {
    // Sort by points, then by NRR
    if (a.points !== b.points) {
      return b.points - a.points;
    }
    return b.nrr - a.nrr;
  });

  return (
    <Card className="bg-white/10 backdrop-blur-sm">
      <CardHeader className="bg-ipl-dark/80 pb-2">
        <CardTitle className="text-center text-xl text-white">Points Table</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-ipl-dark/30">
              <TableRow>
                <TableHead className="text-center text-white">Pos</TableHead>
                <TableHead className="text-white">Team</TableHead>
                <TableHead className="text-center text-white">M</TableHead>
                <TableHead className="text-center text-white">W</TableHead>
                <TableHead className="text-center text-white">L</TableHead>
                <TableHead className="text-center text-white">Pts</TableHead>
                <TableHead className="text-center text-white">NRR</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedTeams.map((team, index) => (
                <TableRow 
                  key={team.id} 
                  className={index < 4 ? "bg-ipl-purple/20" : "hover:bg-gray-700/10"}
                >
                  <TableCell className="text-center font-medium text-white">{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="mr-2 h-6 w-6 overflow-hidden rounded-full">
                        <img
                          src={team.logo}
                          alt={team.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="hidden text-sm text-white sm:inline">{team.name}</span>
                      <span className="text-sm text-white sm:hidden">{team.shortName}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-white">{team.matches}</TableCell>
                  <TableCell className="text-center text-white">{team.won}</TableCell>
                  <TableCell className="text-center text-white">{team.lost}</TableCell>
                  <TableCell className="text-center font-bold text-white">{team.points}</TableCell>
                  <TableCell className="text-center text-white">
                    {team.nrr > 0 ? "+" : ""}
                    {team.nrr.toFixed(3)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PointsTable;
