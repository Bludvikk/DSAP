import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET(request: Request) {
    
    const { searchParams} = new URL(request.url)
    const externalId = searchParams.get('externalId')


    try {
        if(externalId) {
            const user = await prisma.user.findUnique({
                where: { externalId: String(externalId)}
            })
            return NextResponse.json(user)
        }
        
    } catch (error) {
        return NextResponse.json({ error: error})
    }

    const users = await prisma.user.findMany()

    return NextResponse.json(users)
}