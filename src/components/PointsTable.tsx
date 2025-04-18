
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
import { usePointsTable } from "@/hooks/usePointsTable";

const PointsTable = () => {
  const { data: pointsTableData, isLoading } = usePointsTable();

  if (isLoading) {
    return (
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardContent className="p-6 text-center text-white">
          Loading points table...
        </CardContent>
      </Card>
    );
  }

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
              {pointsTableData?.map((entry, index) => (
                <TableRow 
                  key={entry.team_id} 
                  className={index < 4 ? "bg-ipl-purple/20" : "hover:bg-gray-700/10"}
                >
                  <TableCell className="text-center font-medium text-white">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="mr-2 h-6 w-6 overflow-hidden rounded-full">
                        <img
                          src={entry.teams.logo}
                          alt={entry.teams.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="hidden text-sm text-white sm:inline">
                        {entry.teams.name}
                      </span>
                      <span className="text-sm text-white sm:hidden">
                        {entry.teams.short_name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-white">{entry.matches}</TableCell>
                  <TableCell className="text-center text-white">{entry.won}</TableCell>
                  <TableCell className="text-center text-white">{entry.lost}</TableCell>
                  <TableCell className="text-center font-bold text-white">{entry.points}</TableCell>
                  <TableCell className="text-center text-white">
                    {entry.nrr > 0 ? "+" : ""}
                    {entry.nrr.toFixed(3)}
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
