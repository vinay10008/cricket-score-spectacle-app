
export type Team = {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  primaryColor: string;
  matches: number;
  won: number;
  lost: number;
  points: number;
  nrr: number;
};

export const teams: Team[] = [
  {
    id: "csk",
    name: "Chennai Super Kings",
    shortName: "CSK",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
    primaryColor: "#FFFF00",
    matches: 7,
    won: 4,
    lost: 3,
    points: 8,
    nrr: 0.529
  },
  {
    id: "dc",
    name: "Delhi Capitals",
    shortName: "DC",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
    primaryColor: "#0078BC",
    matches: 8,
    won: 3,
    lost: 5,
    points: 6,
    nrr: -0.386
  },
  {
    id: "gt",
    name: "Gujarat Titans",
    shortName: "GT",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
    primaryColor: "#1C1C1C",
    matches: 8,
    won: 4,
    lost: 4,
    points: 8,
    nrr: 0.147
  },
  {
    id: "kkr",
    name: "Kolkata Knight Riders",
    shortName: "KKR",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
    primaryColor: "#3A225D",
    matches: 7,
    won: 6,
    lost: 1,
    points: 12,
    nrr: 1.297
  },
  {
    id: "lsg",
    name: "Lucknow Super Giants",
    shortName: "LSG",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
    primaryColor: "#A7D5F6",
    matches: 8,
    won: 4,
    lost: 4,
    points: 8,
    nrr: 0.077
  },
  {
    id: "mi",
    name: "Mumbai Indians",
    shortName: "MI",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
    primaryColor: "#004BA0",
    matches: 8,
    won: 2,
    lost: 6,
    points: 4,
    nrr: -0.731
  },
  {
    id: "pbks",
    name: "Punjab Kings",
    shortName: "PBKS",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
    primaryColor: "#ED1B24",
    matches: 8,
    won: 4,
    lost: 4,
    points: 8,
    nrr: 0.083
  },
  {
    id: "rr",
    name: "Rajasthan Royals",
    shortName: "RR",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
    primaryColor: "#FF1744",
    matches: 8,
    won: 5,
    lost: 3,
    points: 10,
    nrr: 0.371
  },
  {
    id: "rcb",
    name: "Royal Challengers Bengaluru",
    shortName: "RCB",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
    primaryColor: "#EC1C24",
    matches: 8,
    won: 3,
    lost: 5,
    points: 6,
    nrr: -0.330
  },
  {
    id: "srh",
    name: "Sunrisers Hyderabad",
    shortName: "SRH",
    logo: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
    primaryColor: "#F7A721",
    matches: 8,
    won: 5,
    lost: 3,
    points: 10,
    nrr: 0.577
  }
];

export function getTeamById(id: string): Team | undefined {
  return teams.find(team => team.id === id);
}
