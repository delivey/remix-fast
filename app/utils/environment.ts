import { ZodError } from "zod";
import { z } from "zod";

export let envSchema = z.object({
    SESSION_SECRET: z.string().min(1),
    DIRECTUS_URL: z.string().min(1),
    DIRECTUS_EMAIL: z.string().min(1),
    DIRECTUS_PASSWORD: z.string().min(1),
    DIRECTUS_USER_ROLE: z.string().min(1),
    OWN_URL: z.string().min(1),
    EMAIL_SENDER: z.string().min(1),
    POSTMARK_API_KEY: z.string().min(1),
    REDIS_HOST: z.string().min(1),
    REDIS_PASSWORD: z.string().min(1),
    REDIS_PORT: z.string().min(1),
    REDIS_USERNAME: z.string().min(1),
    PIPEDRIVE_API_KEY: z.string().min(1),
    BEEHIIV_API_KEY: z.string().min(1),
    BEEHIIV_PUBLICATION_ID: z.string().min(1),
    ADMIN_EMAIL: z.string().min(1),
    PG_DATABASE: z.string().min(1),
    PG_HOST: z.string().min(1),
    PG_PASSWORD: z.string().min(1),
    PG_PORT: z.string().min(1),
    PG_USER: z.string().min(1),
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
