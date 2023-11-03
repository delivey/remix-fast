import { ZodError } from "zod";
import { z } from "zod";

export let envSchema = z.object({
    SESSION_SECRET: z.string().min(1),
    SUPABASE_ANON_KEY: z.string().min(1),
    SUPABASE_URL: z.string().min(1),
    NODE_ENV: z
        .union([
            z.literal("test"),
            z.literal("development"),
            z.literal("production"),
        ])
        .default("development"),
});

export type Env = z.infer<typeof envSchema>;

export default function validateEnvironment(env: any) {
    try {
        envSchema.parse(env);
    } catch (error: unknown) {
        if (error instanceof ZodError) {
            let issues = "";
            for (let issue of error.issues) {
                issues += `\n* ${issue.path.join(".")}: ${issue.message}`;
            }
            console.error(
                `Failed to parse environment variables. Issues: ${issues}`
            );
            process.exit(1);
        } else {
            console.error("Failed to parse environment variables. ", error);
            process.exit(1);
        }
    }
}
