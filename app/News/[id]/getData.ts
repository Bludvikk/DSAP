import { prisma } from '@/lib/prisma';


export async function getAllNews() {
    return await prisma.news.findMany()
}

export async function getNewsById(id: number) {
    return await prisma.news.findFirst({
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