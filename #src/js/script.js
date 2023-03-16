"use strict";
// scripts for page
tailwind.config = {
  variants: {
    extend: {
      fontWeight: ["responsive","hover","focus"],
      opacity: ["hover"],
      background: ["hover","focus"],
      borderColor: ["hover","focus"],
      margin: ["first","last"],
      backgroundColor: ["odd","even","hover","focus"],
      scale: ["hover","active","group-hover"],
    },
  },
  theme: {
    extend: {
      spacing: {
        '8xl': '1340px',
        '9xl': '128rem',
      },
    },
    minHeight: {
      'screen': '100vh',
      'h120': '120px',
      'h160': '160px',
    },
    maxWidth: {
      'w172': '172px',
      'w290': '290px',
      'w350': '350px',
      'w400': '400px',
      'w455': '455px',
      'w680': '680px',
    },
    borderRadius: {
      sm: "2px",
      xm: "5px",
      xl: "10px",
      b16: "16px",
      md: "40px",
      hf: "50%",
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      "s10": "10px",
      "s15": "15px",
      "s17": "17px",
      "s21": "21px",
      "s22": "22px",
      "s22": "24px",
      "s26": "26px",
      "s28": "28px",
      "s32": "32px",
      "s32": "36px",
      "s40": "40px",
      "s60": "40px",
      "s80": "80px",
    },
    lineHeight: {
      1: '1em'
    },
    colors: {
      transparent: 'transparent',
      "black": "#181818",
      "white": "#fff",
      "main": "#03075A",
      "green": {
        100: "#EBF56D",
        200: "#8EB005"
      },
      "blue": {
        100: "#4299e1",
        200: "#068bf8",
        300: "#CDE7EC",
        400: "#03075A",
        500: "#1E4993",
      },
      "grey": {
        100: '#F8F9FB',
        200: '#E7EBEE',
        300: "#8B8B8B",
        400: "#242424",
        500: "#797979",
        600: "#4A4C57",
        700: "#F0F0F0",
      },
    },
    screens: {
      xsm: "440px",
      sm: "640px",
      md: "768px",
      lap: "990px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    safelist: [
      "before:bg-green",
      "before:bg-blue",
      'text-3xl',
      'lg:text-4xl',
    ]
  },
}



