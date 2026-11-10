// Bank Mobile App - Theme & Design Tokens
// Extracted from Figma (bank-mobile-app-template-gokul)

export const colors = {
  primary: "#7165E3",        // Brand Purple
  primaryDark: "#5E51D8",
  primarySoft: "#F0EEFF",
  primaryPastel: "#E5E1FF",
  dark: "#1C1939",           // High-contrast primary text
  darkMuted: "#2E2A54",
  secondary: "#FF5F00",      // Vibrant Orange CTA
  secondarySoft: "#FFF0E6",
  cyan: "#5AA5E2",           // Soft Blue / Cyan Accent
  cyanSoft: "#EEF7FF",
  gray: "#9EA6BE",           // Subtext gray
  grayDark: "#606782",
  lightGray: "#CCCDD4",      // Borders & dividers
  border: "#EAEBF0",
  background: "#F9F9FB",     // Screen canvas
  card: "#FFFFFF",           // Card surface
  success: "#10B981",        // Income green
  successSoft: "#E6F9F2",
  danger: "#EF4444",         // Expense red
  dangerSoft: "#FEE2E2",
  warning: "#F59E0B",
  white: "#FFFFFF",
};

export const typography = {
  h1: { fontSize: 32, fontWeight: "800", lineHeight: 38 },
  h2: { fontSize: 24, fontWeight: "700", lineHeight: 30 },
  h3: { fontSize: 20, fontWeight: "700", lineHeight: 26 },
  h4: { fontSize: 18, fontWeight: "600", lineHeight: 24 },
  bodyLarge: { fontSize: 16, fontWeight: "400", lineHeight: 24 },
  bodyMedium: { fontSize: 14, fontWeight: "400", lineHeight: 20 },
  bodySmall: { fontSize: 12, fontWeight: "400", lineHeight: 16 },
  caption: { fontSize: 11, fontWeight: "600", lineHeight: 14 },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const radius = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: "#1C1939",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: "#1C1939",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  lg: {
    shadowColor: "#7165E3",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },
};
