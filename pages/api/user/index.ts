import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const {
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        await dbConnect()
        const result = await User.find({})
        res.status(200).json({ success: true, data: result })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        await dbConnect()
        const result = await User.create(req.body)
        res.status(201).json({ success: true, data: result })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }

}
