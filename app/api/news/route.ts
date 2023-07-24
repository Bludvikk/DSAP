

import { prisma } from '@/lib/prisma'


import { NextResponse } from 'next/server'


export async function GET(request: Request) {
  try {
    const events = await prisma.news.findMany({
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

export async function POST(request: Request) {

  const body = await request.json();

  const {
    title,
    attachments,
    content,
    userId,
    date,
  } = body;



  const event = await prisma.news.create({
    data: {
      title,
      attachments,
      content,
      userId,
      date,
    }
  })
  return NextResponse.json(event)
}



