/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4274fe',
                darkPrimary: '#2e5cb3',
                pink: '#f64ff8',
                separator: '#dbdbdb',
                lightHover: 'rgb(0,0,0,.05)',
                secondaryText: 'rgb(115,115,115)',
                grey: 'rgb(142,142,142)',
                primaryRed: 'rgb(255, 48, 64)',
                error: 'rgb(237, 73, 86)',
                lightWhite: 'rgba(255,255,255,.94)',
                btnHover: 'rgb(219, 219, 219)',
                btnBackground: 'rgb(239, 239, 239)',
                link: 'rgb(0, 55, 107)',
                highlightBackground: 'rgb(38, 38, 38)',
                focusStroke: 'rgb(168, 168, 168)',

                darkBackground: '#262626',
                darkSecondaryText: '#A8A8A8',
                darkText: '#f5f5f5',
                darkLightHover: 'rgba(255, 255, 255, .1)',
                darkSeparator: 'rgb(38, 38, 38)',
                darkBtnBackground: 'rgb(54, 54, 54)',
                darkBtnHover: 'rgb(38, 38, 38)',
                darkElevatedSeparator: 'rgb(54, 54, 54)',
                darkLink: 'rgb(224, 241, 255)',

                stroke: 'rgb(85, 85, 85)',
            },
            maxHeight: {
                modal: 'calc(100vh - 40px)',
            },
            maxWidth: {
                'post-modal': 'calc(100% - 64px - 64px)',
            },
            minHeight: {
                'with-copyright-footer': 'calc(100vh - 65px)',
            },
            spacing: {
                0.5: '2px',
                4.5: '18px',
                10.5: '42px',
                sidebar: '335px',
                'narrow-sidebar': '72px',
                'search-sidebar': '397px',
                'home-content': '630px',
                'home-feed': '470px',
                'feed-sidebar-width': '319px',
                'setting-sidebar-width': '315px',

                'search-sidebar-left-spacing': '73px',
            },
            fontFamily: {
                system: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,sans-serif",
            },
            transitionTimingFunction: {
                icon: 'cubic-bezier(0.17, 0.17, 0, 1)',
                hover: 'cubic-bezier(0, 0, 1, 1)',
            },
            width: {
                menu: '266px',
                menusContainer: 'calc(266px * 2)',
                'media-info': '335px',
            },
            height: {
                'desktop-nav': '60px',
            },
            boxShadow: {
                tooltip: 'rgba(0, 0, 0, 0.3) 0 2px 10px',
                searchSidebar: '4px 0 24px rgba(0, 0, 0, .15)',
                inputFieldAutoFill: '0 0 0 30px rgb(250, 250, 250) inset',
            },
            animation: {
                'fade-in-tooltip': 'fadeIn .35s ease .8s',
                'fade-out-tooltip': 'fadeOut .5s ease',
                'fade-in-opacity': 'fadeInOpacity cubic-bezier(0.4, 0, 0.2, 1) .4s',
                'scale-small': 'scaleSmall .12s ease',
                'loader-border': 'loaderBorder 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite',
                'loader-point': 'loaderPoint 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0, transform: 'scale(0)' },
                    '100%': { opacity: 1, transform: 'scale(1)' },
                },
                fadeOut: {
                    '0%': { opacity: 1, transform: 'scale(1)' },
                    '60%': { opacity: 0 },
                    '100%': { opacity: 0, transform: 'scale(0)' },
                },
                fadeInOpacity: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                scaleSmall: {
                    '0%': { transform: 'scale(1.08)' },
                    '100%': { transform: 'scale(1)' },
                },
                loaderBorder: {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '40%': {
                        transform: 'rotate(180deg)',
                    },
                    '60%': {
                        transform: 'rotate(180deg)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                    },
                },
                loaderPoint: {
                    '0%': {
                        transform: 'translate3d(0, -32px, 0) scale(0, 2)',
                        opacity: 0,
                    },
                    '50%': {
                        transform: 'translate3d(0, 0, 0) scale(1.25, 1.25)',
                        opacity: 1,
                    },
                    '100%': {
                        transform: 'translate3d(0, 8px, 0) scale(0, 0)',
                        opacity: 0,
                    },
                },
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
