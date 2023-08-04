import { prisma } from '@/lib/prisma';



export async function getAllPosts() {
    return await prisma.conventions.findMany();
}

export async function getPostById(id: number) {
    return await prisma.conventions.findFirst({
        where: {
            id: Number(id),
        }
    })
}