/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "zoom-in-out": "zoomInOut 6s infinite",
            },
            keyframes: {
                zoomInOut: {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.1)" },
                    "100%": { transform: "scale(1)" },
                },
            },
            fontFamily: {
                AllRounder: ["AllRounder"],
                poppins: ["Poppins", "sans-serif"],
                raleway: ["Raleway", "sans-serif"],
            },
            borderRadius: {
                "text-box": "20.669px",
            },
            boxShadow: {
                "text-box": "0px 3.18px 3.18px 0px rgba(0, 0, 0, 0.25)",
            },
            colors: {
                "gradient-start": "#0CA1BF",
                "gradient-end": "#04C2B5",
            },
            backgroundImage: (theme) => ({
                "gradient-custom":
                    "linear-gradient(52deg, #0CA1BF 2.03%, #04C2B5 98.57%)",
                "gradient-back":
                    "linear-gradient(293deg, #66D076 12.11%, #0F93A5 88.6%)",
                "mobile-flair": "url('./src/images/heroMobile.svg')",
                "desktop-flair": "url('./src/images/hero.svg')",
                "mobile-lion" : "url('./src/images/logoMobile.svg')",
                "desktop-lion" : "url('./src/images/prizePoolWatermark.svg')",
            }),
        },
    },
    plugins: [],
};
