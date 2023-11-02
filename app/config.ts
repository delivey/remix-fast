import "dotenv/config";
import { Env } from "./utils/environment";

const env = process.env as Env;

export const supabaseUrl = process.env.SUPABASE_URL as string;
export const supabaseKey = process.env.SUPABASE_ANON_KEY as string;
