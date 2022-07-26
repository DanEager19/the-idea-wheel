import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { title, description, duration, status } = req.body;

    if(req.method !== 'POST') {
        res.status(400).json('Method not allowed.');
    } else if (!title || !description || ! duration || !status) {
        res.status(400).json('Missing Field. Please ensure all fields are provided.')
    } else {
        const idea = await prisma.idea.create({data: {title, description, duration, status}});
        res.status(203).json(idea);
    }
}