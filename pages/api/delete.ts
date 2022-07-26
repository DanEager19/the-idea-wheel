import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;

    if(req.method !== 'POST') {
        res.status(400).json('Method not allowed.');
    } else if (!id) {
        res.status(400).json('Missing Field. Please ensure all fields are provided.')
    } else {
        const idea = await prisma.idea.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(idea);
    }
}