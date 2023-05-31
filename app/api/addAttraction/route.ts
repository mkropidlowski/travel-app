import bcrypt from 'bcrypt';
import { prisma } from '../../libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const {
			title,
			description,
			city,
			province,
			category,
			src,
			price,
			priceCurrency,
			phone,
			email,
			wwwLink,
			ifUserIsLoggedEmail,
		} = body;

		const attracionData = await prisma.temporaryAttraction.create({
			data: {
				title,
				description,
				city,
				province,
				category,
				src,
				price,
				priceCurrency,
				email,
				phone,
				wwwLink,
				ifUserIsLoggedEmail,
			},
		});
		return NextResponse.json(attracionData);
	} catch (error: any) {
		console.log(error, 'REG_ERROR');
		return new NextResponse(error, { status: 500 });
	}
}

