import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;

    if (!userId) {
      return new NextResponse("Unauthorized!", { status: 401 });
    }
    const task = await prisma.tasks.delete({ where: { id } });
    return NextResponse.json(task);
  } catch (error: any) {
    console.log("Error deleting task:", error.message);
    return NextResponse.json({ error: "Error deleting task!", status: 500 });
  }
}
