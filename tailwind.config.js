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
            },
            spacing: {
                0.5: '2px',
                4.5: '18px',
                sidebar: '335px',
                content: '630px',
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
        },
    },
    plugins: [],
};
