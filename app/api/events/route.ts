

import { prisma } from '@/lib/prisma'
import { revalidateTag } from 'next/cache';


import { NextRequest, NextResponse } from 'next/server'


export async function GET(request: NextRequest) {
  try {
    const events = await prisma.events.findMany({
      include: {
        author: {
          select: {
            name: true,
          }
        }
      }
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.error();
  }

  
}

export async function POST(request: NextRequest) {

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



