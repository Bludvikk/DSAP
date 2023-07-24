

import { prisma } from '@/lib/prisma'

import type { WebhookEvent } from '@clerk/nextjs/dist/types/server';


import { NextResponse } from 'next/server'


export async function GET(request: Request) {

  try {
    const events = await prisma.conventions.findMany({
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
    location,
    startDate,
    endDate,
    attachments,
    content,
    userId,
  } = body;



  const event = await prisma.conventions.create({
    data: {
      title,
      startDate,
      endDate,
      location,
      attachments,
      content,
      userId,

    }
    
    
  })
  return NextResponse.json(event)
}



