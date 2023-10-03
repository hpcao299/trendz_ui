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
                pink: '#f64ff8',
                separator: '#dbdbdb',
                lightHover: 'rgb(0,0,0,.05)',
                secondaryText: 'rgb(115,115,115)',
                grey: 'rgb(142,142,142)',
                red: 'rgb(255, 48, 64)',
                lightWhite: 'rgba(255,255,255,.94)',
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
            },
            boxShadow: {
                tooltip: 'rgba(0, 0, 0, 0.3) 0 2px 10px',
                searchSidebar: '4px 0 24px rgba(0, 0, 0, .15)',
            },
            animation: {
                'fade-in-tooltip': 'fadeIn .35s ease .8s',
                'fade-out-tooltip': 'fadeOut .5s ease',
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
            },
        },
    },
    plugins: [],
};
