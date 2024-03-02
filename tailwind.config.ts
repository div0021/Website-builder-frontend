import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "navbg":"var(--navbg)",
        "navtxt":"var(--navtxt)",
        "heading":"var(--heading)",
        "text":"var(--text)",
        "link":"var(--link)",
        "tag":"var(--tag)",
        "footertxt":"var(--footertxt)",
        "dropdown":"var(--dropdown)",
        "subheading":"var(--subheading)",
        "cardtag":"var(--cardtag)",
        "cardtagbg":"var(--cardtagbg)",
        "carddiscount":"var(--carddiscount)",
        "cardoriginalPrice":"var(--cardoriginalPrice)",
        "background":"var(--background)",
        "separator":"var(--separator)",
        "relevant":"var(--relevant)",
        "ratingbox":"var(--ratingbox)",
        "ratingstar":"var(--ratingstar)",
        "counttxt":"var(--counttxt)",
      }
    },
  },
  plugins: [],
};
export default config;
