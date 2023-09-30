/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'z-p4-instagram.fsgn5-9.fna.fbcdn.net',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
