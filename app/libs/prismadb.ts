// import { PrismaClient } from '@prisma/client';

// const globalForPrisma = global as unknown as {
// 	prisma: PrismaClient | undefined;
// };

// export const prisma =
// 	globalForPrisma.prisma ??
// 	new PrismaClient({
// 		log: ['query'],
// 	});

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

//stare
import { PrismaClient } from '@prisma/client';

declare global {
	var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;

// nowe
// import { PrismaClient } from '@prisma/client';

// declare const global: Global & { prisma?: PrismaClient };

// export let prisma: PrismaClient;

// if (typeof window === 'undefined') {
// 	if (process.env['NODE_ENV'] === 'production') {
// 		prisma = new PrismaClient();
// 	} else {
// 		if (!global.prisma) {
// 			global.prisma = new PrismaClient();
// 		}
// 		prisma = global.prisma;
// 	}
// }

// import { Prisma, PrismaClient } from '@prisma/client';

// declare global {
// 	namespace NodeJS {
// 		interface Global {
// 			prisma: PrismaClient;
// 		}
// 	}
// }

// let prisma: PrismaClient;

// if (typeof window === 'undefined') {
// 	if (process.env.NODE_ENV === 'production') {
// 		prisma = new PrismaClient();
// 	} else {
// 		if (!global.prisma) {
// 			global.prisma = new PrismaClient();
// 		}

// 		prisma = global.prisma;
// 	}
// }

// export default prisma;

