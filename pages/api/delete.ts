import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    const result = await prisma.event.delete({
      where: {
        id: id?.toString(),
      },
    });

    res.json(result);
  }catch(error){
    console.error(error);
    res.status(500).json({ message: "Error deleting Event" });
  }finally{
    await prisma.$disconnect();
  }
}
