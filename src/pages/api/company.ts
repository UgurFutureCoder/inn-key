
import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'
import { type } from 'os'
import { NotFoundError } from '@prisma/client/runtime'

const prisma = new PrismaClient()

type Data = {
  inn: Number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {inn} = req.body
    const getCompany = await prisma.company.findUnique({
      where: {
        inn: Number(inn)
      }
    }) 
    if(!getCompany) return
    const name = getCompany.name
    const workers = getCompany.workers
    const income = getCompany.income
    const consumption = getCompany.consumption
    const founder = getCompany.founder
    const about = getCompany.about

    res.status(200).json({
      name,
      workers,
      income,
      consumption,
      founder,
      about
})
  } catch(e){
    console.log(e)
  }
}