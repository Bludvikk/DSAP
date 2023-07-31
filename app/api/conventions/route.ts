

import { prisma } from '@/lib/prisma'

import type { WebhookEvent } from '@clerk/nextjs/dist/types/server';
import { NextApiResponse } from 'next';


import { NextResponse } from 'next/server'

export async function PUT(request: Request, response: NextApiResponse) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')


  if(!id) {
    return NextResponse.error()
  }


  try {
    const existingConventionsItem = await prisma.conventions.findUnique({
      where: {
        id: Number(id)
      },
    });

    if(!existingConventionsItem) {
      return NextResponse.error()
    }


    const body = await request.json()
    const { title, attachments, content, userId, startDate, endDate, location} = body;



    const updatedConventionItem = await prisma.conventions.update({
      where: {
        id: Number(id)
      },
      data: {
        title,
        attachments,
        content,
        userId,
        startDate,
        endDate,
        location,
      }
    })


    return NextResponse.json(updatedConventionItem);
  } catch(error) {
    console.error('error updating events Item', error)
    return NextResponse.json(error)
  }
}


export async function GET(request: Request, response: NextApiResponse) {

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  try {
    if(id) {
      const conventionItem = await prisma.conventions.findUnique({
        where: {
          id: Number(id),
        },
      });


      if(!conventionItem) {
        return NextResponse.error()
      }

      return NextResponse.json(conventionItem)
    }
    const conventions = await prisma.conventions.findMany({
      include: {
        author: {
          select: {
            attributes: true,
          }
        }
      }
    });

    return NextResponse.json(conventions);
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



