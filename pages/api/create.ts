import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, description, venue, date, time } = req.body

  try{
    const result = await prisma.event.create({
      data: {
        title,
        description,
        venue,
        date,
        time
      }
    })
    res.json(result)
  }catch(error){
    console.error(error)
    res.status(500).json({ message: 'Error creating Event' })

  }finally{
    await prisma.$disconnect()
  }
}