import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "white-bg": "#F2F5F9",
        "yellow": "#FF9C1A",
        "red": "#EC1B09",
        "headingText": "#0B0909",
        "textColor": "#000000",
        "grayText": "rgba(26, 16, 3, 50%)",
        "bgOrange": "#FFEBD1",
        "bgGray": "#E1E8EF",
      },
      textSize: {
        "xl":"40px",
        "lg":"28px",
        "md":"16px",
        "sm":"14px",
      },
      borderWidths: {
        "8": "8px",
        "20": "20px",
        "full": "50%"
      },
    },
  },
  plugins: [],
};
export default config;
