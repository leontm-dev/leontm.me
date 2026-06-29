// Imports

import type { Config } from "tailwindcss";

// Code

const config: Config = {
  theme: {
    extend: {
      extend: {
        keyframes: {
          fontCycle: {
            // Wir referenzieren hier direkt die CSS-Variablen aus Schritt 1
            "0%, 24%": { fontFamily: "Bangers" },
            "25%, 49%": { fontFamily: "Dancing Script Variable" },
            "50%, 74%": { fontFamily: "Abril Fatface" },
            "75%, 100%": { fontFamily: "Roboto" },
          },
        },
        animation: {
          "font-cycle": "fontCycle 0s step-end infinite",
        },
      },
    },
  },
};
export default config;
