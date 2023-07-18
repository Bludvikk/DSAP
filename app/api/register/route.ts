import bcrypt from "bcrypt";

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    email,
    name,
    password,
    roleId,
    statusId
  } = body;


console.log(body)
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
      roleId,
      statusId,
    }
  });

  

  return NextResponse.json(user);
}