import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { createServerClient } from "@supabase/auth-helpers-remix";
import { useLoaderData } from "@remix-run/react";
import { supabaseKey, supabaseUrl } from "~/config";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const response = new Response();
    const client = createServerClient(supabaseUrl, supabaseKey, {
        request,
        response,
    });
    const user = await client.auth.getUser();
    return user;
};

export default function User() {
    const data = useLoaderData();

    console.log(data);
}
