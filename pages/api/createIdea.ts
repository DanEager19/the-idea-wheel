import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../prisma/prisma';

type Data = {
    title: string,
    description: string,
    duration: string,
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    
}

export default handler;