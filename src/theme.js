'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        primary: {
            main: "#707266"
        },
        secondary: {
            main: '#69d2e7'
        },
        highlight: {
            main: "#fa6900"
        },
        lighter: {
            main: '#707266'
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        h1: {
            fontSize: "3rem",
            fontWeight: "600"
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: "600"
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: "600"
        },

    },

});

export default theme;
