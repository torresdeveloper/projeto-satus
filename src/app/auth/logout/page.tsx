import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { LogoutClientRedirect } from "./LogoutClientRedirect";

export default async function LogoutPage() {
  return <LogoutClientRedirect />;
}
