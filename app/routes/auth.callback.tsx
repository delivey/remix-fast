import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { createServerClient } from "@supabase/auth-helpers-remix";
import { supabaseKey, supabaseUrl } from "~/config";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const response = new Response();
    const url = new URL(request.url);
    const code = url.searchParams.get("code");

    if (code) {
        const supabaseClient = createServerClient(supabaseUrl, supabaseKey, {
            request,
            response,
        });
        await supabaseClient.auth.exchangeCodeForSession(code);
    }

    return redirect("/", {
        headers: response.headers,
    });
};
