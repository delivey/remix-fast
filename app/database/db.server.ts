import { createClient } from "@supabase/supabase-js";
import { supabaseUrl, supabaseKey } from "~/config";
// see documention about using .env variables
// https://remix.run/docs/en/v1/guides/envvars#server-environment-variables

export const supabase = createClient(supabaseUrl, supabaseKey);
