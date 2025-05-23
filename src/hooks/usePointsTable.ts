
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type PointsTableEntry = {
  team_id: string;
  matches: number;
  won: number;
  lost: number;
  points: number;
  nrr: number;
};

export const usePointsTable = () => {
  return useQuery({
    queryKey: ["points_table"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("points_table")
          .select(`
            team_id,
            matches,
            won,
            lost,
            points,
            nrr,
            teams (
              name,
              short_name,
              logo
            )
          `)
          .order("points", { ascending: false });
        
        if (error) throw error;
        console.log("Points table data fetched:", data);
        return data as (PointsTableEntry & { teams: { name: string; short_name: string; logo: string } })[];
      } catch (error) {
        console.error("Error fetching points table:", error);
        return [];
      }
    },
  });
};
