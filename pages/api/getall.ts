import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../prisma/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const ideas = await prisma.idea.findMany();
    res.json(ideas);
}

export default handler;