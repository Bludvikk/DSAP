import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { revalidateTag } from "next/cache";

import { NextRequest, NextResponse } from "next/server";




export async function PUT(request: Request, response: NextApiResponse) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')


  if(!id) {
    return NextResponse.error()
  }


  try {
    const existingEventsItem = await prisma.events.findUnique({
      where: {
        id: Number(id)
      },
    });

    if(!existingEventsItem) {
      return NextResponse.error()
    }


    const body = await request.json()
    const { title, attachments, content, userId, startDate, endDate, location} = body;



    const updateEventsItem = await prisma.events.update({
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


    return NextResponse.json(updateEventsItem);
  } catch(error) {
    console.error('error updating events Item', error)
    return NextResponse.json(error)
  }
}
export async function GET(request: Request, response: NextApiResponse) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      const eventsItem = await prisma.events.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!eventsItem) {
        return NextResponse.error;
      }

      return NextResponse.json(eventsItem);
    }
    const events = await prisma.events.findMany({
      include: {
        author: {
          select: {
            attributes: true,
          },
        },
      },
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error("Error fetching news:", error);
    return response.json(error);
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { title, location, startDate, endDate, attachments, content, userId } =
    body;

  const event = await prisma.events.create({
    data: {
      title,
      location,
      startDate,
      endDate,
      attachments,
      content,
      userId,
    },
  });
  return NextResponse.json(event);
}
