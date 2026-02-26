export const theme = {
  colors: {
    inkBackground: "#0e1a2b",
    pageBackground: "#f4f8fd",
    electricBlue: "#0a66c2",
    electricBlueSoft: "#58a7ff",
    subtleGold: "#c4922f",
    subtleGoldSoft: "#e3b452",
    borderSoft: "#d7e4f6",
    textPrimary: "#13233a",
    textMuted: "#4a5f79",
  },
  containers: {
    narrow: "64rem",
    content: "72rem",
    wide: "80rem",
  },
  sectionSpacing: {
    compact: "2.5rem",
    comfortable: "4rem",
    spacious: "5.5rem",
  },
} as const;

export type Theme = typeof theme;
