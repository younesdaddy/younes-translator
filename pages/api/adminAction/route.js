import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { id, action } = await req.json();

    const status = action === "approve" ? "approved" : "rejected";

    const { error } = await supabaseAdmin
      .from("translations")
      .update({ status })
      .eq("id", id);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
