import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Data = {
    id: string,
    title: string,
    description: string,
    duration: string,
    status: string,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data[] | string>) {
    if(req.method !== 'GET') {
        res.status(400).json('Method not allowed.');
    } else {
        const ideas = await prisma.idea.findMany({
            where: {
                status: {
                    contains: 'In Progress'
                },
            }
        });
        console.log(ideas);
        res.status(200).json(ideas);
    }
}
