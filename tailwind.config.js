/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./pages/**/*.{html,js,ts}",
        "./common/**/*.{html,js,ts}",
        "./js/**/*.js",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        screens: {
            'xs': {'max' : '360px'},
            'sm': {'max' :'640px'},
            'md': {'max' :'1024px'},
            'lg': {'max' :'1280px'},
            'xl': {'max' :'1400px'},
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '20px',
                md: '40px'
            },
            screens: {
                'xl': '1280px',
                'lg': '1280px',
                'md': '1024px',
                'sm': '640px',
                'xs': '360px',




            }
        },
        extend: {
            fontFamily: {
                amiko: ['Amiko', 'sans-serif'],
                golos: ['Golos Text', 'sans-serif']
            },
            colors: {
                'text_main': '#30323A',
                'orange_main': '#FF6007',
                'gray_light': '#D2D2D2',
                'gray_medium': '#9F9F9F',
                'gray_bg': '#F3F4F6',
                'green_success': '#5FA800',
            },
            lineHeight: {

            },
            borderRadius: {
            },

            borderWidth: {
              '1.6': '1.6px'
            },

            boxShadow: {
                base: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
            }


        }
    },
    plugins: [require("tw-elements/dist/plugin.cjs")],
};
