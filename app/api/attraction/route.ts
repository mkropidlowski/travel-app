import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: any, res: any) {
	const posts = await prisma.temporaryAttraction.findMany({ select: { city: true } });
	return res.json(posts);
}

