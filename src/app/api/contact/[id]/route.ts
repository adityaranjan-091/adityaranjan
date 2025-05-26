import { connectDB, ContactForm } from "@/lib/database";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
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
  } catch (err) {
    return NextResponse.json(
      { message: "Server error", error: err },
      { status: 500 }
    );
  }
}
