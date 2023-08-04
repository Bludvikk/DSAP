import { prisma } from '@/lib/prisma';


export async function getAllEvents() {
    return await prisma.events.findMany()
}

export async function getEventsById(id: number) {
    return await prisma.events.findFirst({
        where: {
            id: Number(id)
        },
        include: {
            author: {
                select: {
                    attributes: true
                }
            }
        }
        
    })
}