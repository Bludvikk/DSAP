import { prisma } from '@/lib/prisma';


export async function getAllNews() {
    return await prisma.events.findMany()
}

export async function getNewsById(id: number) {
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