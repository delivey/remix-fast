import {
    ActionFunctionArgs,
    LoaderFunctionArgs,
    json,
    redirect,
} from "@remix-run/node";
import { useLoaderData, Link, Form, useActionData } from "@remix-run/react";
import { supabase } from "~/database/db.server";
import { commitSession, getSession } from "~/utils/session.server";
import { Auth } from "@supabase/auth-ui-react";
import { Button } from "~/components/ui/button";

export let action = async ({ request }: ActionFunctionArgs) => {
    let form = await request.formData();
    let email = form.get("email") as string;
    let password = form.get("password") as string;

    await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: "http://localhost:3000/auth/callback",
        },
    });
    return null;
};

export default function CreateAccount() {
    const actionData = useActionData();
    const data: any = useLoaderData();
    return (
        <div>
            <Button>test</Button>
        </div>
    );
}
