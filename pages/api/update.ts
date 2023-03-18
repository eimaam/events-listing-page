import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method !== "PUT"){
        res.status(405).json({ message: 'Method not allowed!'})
        return
    }

    const { eventId, data } = req.body;
  try{
    const result = await prisma.event.update({
      where: { id: eventId },
      data: {...data},
    });
    res.status(200).send({success: 'Event updated successfully', data: data})
    res.json(result);
  }catch(error){
    console.error(error);
    res.status(500).json({ message: "Error updating Event" });
  }finally{
    await prisma.$disconnect();
  }
}
