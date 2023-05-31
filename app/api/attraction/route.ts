import { useSession } from 'next-auth/react';
// import prisma from '../../libs/prismadb';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: any, res: any) {
	const posts = await prisma.temporaryAttraction.findMany({ select: { city: true } });
	return res.json(posts);
}
// export default async function getAttractionByUserId() {
// 	try {
// 		const attraction = await prisma.temporaryAttraction.findMany();
// 		console.log(attraction);

// 		return attraction;
// 	} catch (error: any) {
// 		console.log(error);
// 		return [];
// 	}
// }

