/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10151F",       // near-black navy — primary text / dark surfaces
        paper: "#F3F5EF",     // pale sage-tinted paper — page background
        primary: "#1B7A5B",   // emerald — primary actions, links
        "primary-dark": "#145C45",
        accent: "#FFB800",    // amber "highlighter" — signature accent, used sparingly
        muted: "#4B5768",     // slate — secondary text
        line: "#DEE3D7",      // hairline borders on paper
        "line-dark": "#232B24" // hairline borders on ink surfaces
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
