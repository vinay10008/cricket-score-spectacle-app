
export type MatchStatus = "UPCOMING" | "LIVE" | "COMPLETED";

export type BattingInfo = {
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  status: string;
};

export type BowlingInfo = {
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
};

export type PlayerBattingStats = {
  name: string;
  batting: BattingInfo;
};

export type PlayerBowlingStats = {
  name: string;
  bowling: BowlingInfo;
};

export type InningsScore = {
  teamId: string;
  runs: number;
  wickets: number;
  overs: number;
  battingStats?: PlayerBattingStats[];
  bowlingStats?: PlayerBowlingStats[];
};

export type Match = {
  id: string;
  team1Id: string;
  team2Id: string;
  date: string;
  venue: string;
  status: MatchStatus;
  innings1?: InningsScore;
  innings2?: InningsScore;
  result?: string;
  matchNumber: number;
};

export const matches: Match[] = [
  {
    id: "match1",
    team1Id: "kkr",
    team2Id: "srh",
    date: "2025-04-18T14:00:00Z",
    venue: "Eden Gardens, Kolkata",
    status: "LIVE",
    innings1: {
      teamId: "kkr",
      runs: 208,
      wickets: 7,
      overs: 20,
      battingStats: [
        {
          name: "Phil Salt",
          batting: {
            runs: 54,
            balls: 40,
            fours: 3,
            sixes: 4,
            strikeRate: 135.00,
            status: "c Markram b Bhuvneshwar"
          }
        },
        {
          name: "Sunil Narine",
          batting: {
            runs: 40,
            balls: 20,
            fours: 2,
            sixes: 4,
            strikeRate: 200.00,
            status: "b Natarajan"
          }
        }
      ],
      bowlingStats: []
    },
    innings2: {
      teamId: "srh",
      runs: 152,
      wickets: 8,
      overs: 15.5,
      battingStats: [
        {
          name: "Abhishek Sharma",
          batting: {
            runs: 32,
            balls: 21,
            fours: 3,
            sixes: 2,
            strikeRate: 152.38,
            status: "c Russell b Chakravarthy"
          }
        },
        {
          name: "Heinrich Klaasen",
          batting: {
            runs: 41,
            balls: 26,
            fours: 1,
            sixes: 4,
            strikeRate: 157.69,
            status: "batting"
          }
        }
      ],
      bowlingStats: [
        {
          name: "Mitchell Starc",
          bowling: {
            overs: 3.5,
            maidens: 0,
            runs: 35,
            wickets: 3,
            economy: 9.13
          }
        },
        {
          name: "Varun Chakravarthy",
          bowling: {
            overs: 4,
            maidens: 0,
            runs: 28,
            wickets: 2,
            economy: 7.00
          }
        }
      ]
    },
    matchNumber: 42
  },
  {
    id: "match2",
    team1Id: "rr",
    team2Id: "mi",
    date: "2025-04-18T18:00:00Z",
    venue: "Wankhede Stadium, Mumbai",
    status: "UPCOMING",
    matchNumber: 43
  },
  {
    id: "match3",
    team1Id: "csk",
    team2Id: "lsg",
    date: "2025-04-19T14:00:00Z",
    venue: "MA Chidambaram Stadium, Chennai",
    status: "UPCOMING",
    matchNumber: 44
  },
  {
    id: "match4",
    team1Id: "rcb",
    team2Id: "gt",
    date: "2025-04-17T14:00:00Z",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    status: "COMPLETED",
    innings1: {
      teamId: "rcb",
      runs: 186,
      wickets: 5,
      overs: 20
    },
    innings2: {
      teamId: "gt",
      runs: 153,
      wickets: 10,
      overs: 18.4
    },
    result: "Royal Challengers Bengaluru won by 33 runs",
    matchNumber: 41
  },
  {
    id: "match5",
    team1Id: "dc",
    team2Id: "pbks",
    date: "2025-04-16T18:00:00Z",
    venue: "Arun Jaitley Stadium, Delhi",
    status: "COMPLETED",
    innings1: {
      teamId: "dc",
      runs: 177,
      wickets: 8,
      overs: 20
    },
    innings2: {
      teamId: "pbks",
      runs: 178,
      wickets: 5,
      overs: 19.2
    },
    result: "Punjab Kings won by 5 wickets",
    matchNumber: 40
  }
];

export function getLiveMatches(): Match[] {
  return matches.filter(match => match.status === "LIVE");
}

export function getUpcomingMatches(): Match[] {
  return matches.filter(match => match.status === "UPCOMING");
}

export function getCompletedMatches(): Match[] {
  return matches.filter(match => match.status === "COMPLETED");
}
