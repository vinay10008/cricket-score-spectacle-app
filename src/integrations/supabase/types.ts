export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          created_at: string | null
          doctor_id: string | null
          id: string
          scheduled_for: string
          status: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          doctor_id?: string | null
          id?: string
          scheduled_for: string
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          doctor_id?: string | null
          id?: string
          scheduled_for?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      batting_stats: {
        Row: {
          balls: number
          created_at: string
          fours: number
          id: string
          innings_id: string
          player_id: string
          runs: number
          sixes: number
          status: string | null
        }
        Insert: {
          balls?: number
          created_at?: string
          fours?: number
          id?: string
          innings_id: string
          player_id: string
          runs?: number
          sixes?: number
          status?: string | null
        }
        Update: {
          balls?: number
          created_at?: string
          fours?: number
          id?: string
          innings_id?: string
          player_id?: string
          runs?: number
          sixes?: number
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "batting_stats_innings_id_fkey"
            columns: ["innings_id"]
            isOneToOne: false
            referencedRelation: "innings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "batting_stats_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      bowling_stats: {
        Row: {
          created_at: string
          id: string
          innings_id: string
          maidens: number
          overs: number
          player_id: string
          runs: number
          wickets: number
        }
        Insert: {
          created_at?: string
          id?: string
          innings_id: string
          maidens?: number
          overs?: number
          player_id: string
          runs?: number
          wickets?: number
        }
        Update: {
          created_at?: string
          id?: string
          innings_id?: string
          maidens?: number
          overs?: number
          player_id?: string
          runs?: number
          wickets?: number
        }
        Relationships: [
          {
            foreignKeyName: "bowling_stats_innings_id_fkey"
            columns: ["innings_id"]
            isOneToOne: false
            referencedRelation: "innings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bowling_stats_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      consultations: {
        Row: {
          ai_summary: string
          created_at: string | null
          id: string
          symptoms: string
          user_id: string | null
        }
        Insert: {
          ai_summary: string
          created_at?: string | null
          id?: string
          symptoms: string
          user_id?: string | null
        }
        Update: {
          ai_summary?: string
          created_at?: string | null
          id?: string
          symptoms?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "consultations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      doctors: {
        Row: {
          created_at: string | null
          email: string
          full_name: string
          id: string
          license_number: string | null
          specialization: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name: string
          id?: string
          license_number?: string | null
          specialization?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          license_number?: string | null
          specialization?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      innings: {
        Row: {
          created_at: string
          id: string
          innings_number: number
          match_id: string
          overs: number
          runs: number
          team_id: string
          wickets: number
        }
        Insert: {
          created_at?: string
          id?: string
          innings_number: number
          match_id: string
          overs?: number
          runs?: number
          team_id: string
          wickets?: number
        }
        Update: {
          created_at?: string
          id?: string
          innings_number?: number
          match_id?: string
          overs?: number
          runs?: number
          team_id?: string
          wickets?: number
        }
        Relationships: [
          {
            foreignKeyName: "innings_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "innings_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      matches: {
        Row: {
          created_at: string
          id: string
          match_date: string
          match_number: number
          status: string
          team1_id: string
          team2_id: string
          venue: string
        }
        Insert: {
          created_at?: string
          id?: string
          match_date: string
          match_number: number
          status: string
          team1_id: string
          team2_id: string
          venue: string
        }
        Update: {
          created_at?: string
          id?: string
          match_date?: string
          match_number?: number
          status?: string
          team1_id?: string
          team2_id?: string
          venue?: string
        }
        Relationships: [
          {
            foreignKeyName: "matches_team1_id_fkey"
            columns: ["team1_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_team2_id_fkey"
            columns: ["team2_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      players: {
        Row: {
          batting_style: string | null
          bowling_style: string | null
          country: string
          created_at: string
          id: string
          image_url: string | null
          name: string
          role: string
          team_id: string | null
        }
        Insert: {
          batting_style?: string | null
          bowling_style?: string | null
          country: string
          created_at?: string
          id?: string
          image_url?: string | null
          name: string
          role: string
          team_id?: string | null
        }
        Update: {
          batting_style?: string | null
          bowling_style?: string | null
          country?: string
          created_at?: string
          id?: string
          image_url?: string | null
          name?: string
          role?: string
          team_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "players_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      points_table: {
        Row: {
          id: string
          lost: number
          matches: number
          nrr: number
          points: number
          team_id: string
          updated_at: string
          won: number
        }
        Insert: {
          id?: string
          lost?: number
          matches?: number
          nrr?: number
          points?: number
          team_id: string
          updated_at?: string
          won?: number
        }
        Update: {
          id?: string
          lost?: number
          matches?: number
          nrr?: number
          points?: number
          team_id?: string
          updated_at?: string
          won?: number
        }
        Relationships: [
          {
            foreignKeyName: "points_table_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: true
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string
          id: string
          logo: string
          name: string
          primary_color: string
          short_name: string
        }
        Insert: {
          created_at?: string
          id: string
          logo: string
          name: string
          primary_color: string
          short_name: string
        }
        Update: {
          created_at?: string
          id?: string
          logo?: string
          name?: string
          primary_color?: string
          short_name?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          date_of_birth: string | null
          email: string
          full_name: string | null
          id: string
          medical_history: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date_of_birth?: string | null
          email: string
          full_name?: string | null
          id?: string
          medical_history?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date_of_birth?: string | null
          email?: string
          full_name?: string | null
          id?: string
          medical_history?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
