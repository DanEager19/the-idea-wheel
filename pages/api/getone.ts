import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;
    if(req.method !== 'GET') {
        res.status(400).json('Method not allowed.');
    } else if (!id){
        res.status(400).json('ID not provided.')
    } else {
        const idea = await prisma.idea.findUnique({
            where: {
                id: id,
            },
        });
        res.status(200).json(idea);
    }
}