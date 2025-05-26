import { NextResponse, NextRequest } from "next/server";
import { connectDB, ContactForm } from "@/lib/database";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const deleted = await ContactForm.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: String(error) },
      { status: 500 }
    );
  }
}
