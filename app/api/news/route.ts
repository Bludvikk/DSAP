

import { prisma } from '@/lib/prisma'
import { error } from 'console';
import { NextApiRequest, NextApiResponse } from 'next';


import { NextResponse } from 'next/server'


export async function GET(
  request: Request,
  response: NextApiResponse
) {
  
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  try {
    if (id) {
      // Fetch a single news item by its ID from the database
      const newsItem = await prisma.news.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          author: {
            select: {
              name: true,
            },
          },
        },
      });

      if (!newsItem) {
        // If the news item with the specified ID is not found, return a 404 error
        return NextResponse.error
      }

      return NextResponse.json(newsItem)
    }

     // Fetch all news items when no ID is provided
     const newsItems = await prisma.news.findMany({
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(newsItems)
  } catch (error) {
    console.error('Error fetching news:', error);
    return response.json(error)
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



