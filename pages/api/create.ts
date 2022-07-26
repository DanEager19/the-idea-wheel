import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {title, description, duration, complete} = req.body;

    if(req.method === 'POST') {
        const idea = await prisma.idea.create({data: {title, description, duration, complete}});
        res.json(idea);
    }
}