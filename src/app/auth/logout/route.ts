import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = "/";

  const supabase = createSupabaseServerClient();
  await supabase.auth.signOut();

  return NextResponse.redirect(redirectTo);
}
