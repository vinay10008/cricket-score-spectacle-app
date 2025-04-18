
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type Team = {
  id: string;
  name: string;
  short_name: string;
  logo: string;
  primary_color: string;
};

export const useTeams = () => {
  return useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("teams")
          .select("*");
        
        if (error) throw error;
        console.log("Teams data fetched:", data);
        return data as Team[];
      } catch (error) {
        console.error("Error fetching teams:", error);
        return [];
      }
    },
  });
};
