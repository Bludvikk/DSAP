

import { prisma } from '@/lib/prisma'
import { error } from 'console';
import { NextApiRequest, NextApiResponse } from 'next';


import { NextResponse } from 'next/server'


export async function PUT(request: Request, response: NextApiResponse) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.error();
  }

  try {
    const existingNewsItem = await prisma.news.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingNewsItem) {
      return NextResponse.error();
    }

    // Parse the request body for the updated news item data
    const body = await request.json();
    const { title, attachments, content, userId, date } = body;

    // Update the news item in the database
    const updatedNewsItem = await prisma.news.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        attachments,
        content,
        userId,
        date,
      },
    });

    return NextResponse.json(updatedNewsItem);
  } catch (error) {
    console.error('Error updating news item:', error);
    return response.json(error);
  }
}

export async function GET(
  request: Request,
  response: NextApiResponse
) {
  
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  try {
    if (id) {
      
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
        
        return NextResponse.error
      }

      return NextResponse.json(newsItem)
    }

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



