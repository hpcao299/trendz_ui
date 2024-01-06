import config from '@/config';
import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    pages: {
        signIn: config.routes.login,
        error: config.routes.login,
    },
};

const handler = NextAuth(authOptions as unknown as AuthOptions);
export { handler as GET, handler as POST };
