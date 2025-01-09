import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 0.3s ease-out",
        countdown: "countdown 5s linear forwards", 
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        countdown: {
          from: { strokeDashoffset: "100" },
          to: { strokeDashoffset: "0" }, 
        },
      },
      screens: {
        xs: "320px",  
        xmd: "375px",  
        xlg: "424px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      abel: ['Abel', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config;
