const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './src/i18n.ts',
);

const nextConfig = withNextIntl({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'z-p4-instagram.fsgn5-9.fna.fbcdn.net',
                pathname: '/**',
            },
        ],
    },
});

module.exports = nextConfig;
