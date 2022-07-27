import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {id, title, description, duration, status} = req.body;

    if(req.method !== 'POST') {
        res.status(400).json('Method not allowed.');
    } else if (!id || !title || !description || ! duration || !status) {
        res.status(400).json('Missing Field. Please ensure all fields are provided.')
    } else {
        const idea = await prisma.idea.update({
            where: {
                id: id
            },
            data: {
                title: title, 
                description: description, 
                duration: duration, 
                status: status
            }
        });
        res.status(200).json(idea);
    }
}