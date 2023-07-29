import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { revalidateTag } from "next/cache";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: NextApiResponse) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      const eventsItem = await prisma.events.findUnique({
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

      if (!eventsItem) {
        return NextResponse.error;
      }

      return NextResponse.json(eventsItem);
    }
    const events = await prisma.events.findMany({
      include: {
        author: {
          select: {
            name: true,
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
