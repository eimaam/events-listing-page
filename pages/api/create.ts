// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>){
  const { title, description, date, time, } = req.body

  try{
    await prisma?.event.create({
      data:{
        title,
        description,
        date,
        time,
      }
    })
    res.status(200).json({ name: 'John Doe' })
  }
  catch(err){
    console.log("Cretion Failed")
  }

}
