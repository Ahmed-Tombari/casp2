import type { Config } from "tailwindcss";

const config: Config = {
  // Ensuring consistency with your standalone component architecture
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",

        // Thom's Lettering Guide Palette
        primary: {
          DEFAULT: "#0487D9", // Thom-3 (Bright Blue)
          foreground: "#F2F2F2",
        },
        secondary: {
          DEFAULT: "#049DD9", // Thom-4 (Vibrant Blue)
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#0378A6", // Thom-5 (Deep Blue/Teal)
          foreground: "#FFFFFF",
        },
        "thom-dark": "#2E3140", // Thom-2 (Deep Navy/Slate)
        "thom-light": "#F2F2F2", // Thom-1 (Off-white)

        destructive: {
          DEFAULT: "#D95829", // Keeping a red-orange for errors
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        // Updated shadows to use the new Slate/Blue tones
        "soft-sm": "0 2px 8px -2px rgba(46, 49, 64, 0.1)",
        soft: "0 8px 24px -6px rgba(46, 49, 64, 0.15)",
        "soft-hover": "0 12px 32px -8px rgba(4, 135, 216, 0.25)",
        "3d": "0 6px 0 0 #0378A6", // Using Thom-5 for the 3D depth
        "3d-pressed": "0 2px 0 0 #0378A6",
      },
      fontFamily: {
        // Following your preference for Cairo
        sans: ["var(--font-cairo)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
