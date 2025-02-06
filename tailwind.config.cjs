// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandDark: "#1F2937",
        brandDarker: "#111827",
        brandAccent: "#EAB308", // or "#FBBF24"
        brandHighlight: "#38BDF8",
      },
    },
  },
  plugins: [],
}
