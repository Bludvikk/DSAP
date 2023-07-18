import { prisma } from '@/lib/prisma'
import { NextApiRequest } from 'next';


import { NextResponse } from 'next/server'


export async function GET(request: NextApiRequest) {
  const events = await prisma.events.findMany({
  })




  return NextResponse.json(events)


}

export async function POST(request: Request) {

  const body = await request.json();

  const {
    title,
    location,
    startDate,
    endDate,
    attachments,
    content,
    userId,
  } = body;



  const event = await prisma.events.create({
    data: {
      title,
      location,
      startDate,
      endDate,
      attachments,
      content,
      userId,

    }
    
    
  })
  return NextResponse.json(event)
}



