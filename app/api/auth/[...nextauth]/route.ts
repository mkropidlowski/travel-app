import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../libs/prismadb';

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		GoogleProvider({
			clientId: '',
			clientSecret: '',
		}),
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) {
					throw new Error('Ivalid data');
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});
				if (!user || !user?.hashedPassword) {
					throw new Error('Ivalid data');
				}

				const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword);

				if (!isCorrectPassword) {
					throw new Error('Ivalid data');
				}

				return user;
			},
		}),
	],
	debug: process.env.NODE_ENV === 'development',
	pages: {
		signIn: '/pages/login',
		signOut: '/',
	},
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

