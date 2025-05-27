//app/api/contact/[id]/route.ts
import { connectDB, ContactForm } from "@/lib/database";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
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
  } catch (err: any) {
    return NextResponse.json(
      { message: "Server error", error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
