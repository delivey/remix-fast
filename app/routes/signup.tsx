import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { useLoaderData, Link, Form, useActionData } from "@remix-run/react";
import { supabaseClient } from "~/database/db.server";
import { commitSession, getSession } from "~/utils/session.server";

export let action = async ({ request }: ActionFunctionArgs) => {
    let form = await request.formData();
    let email = form.get("email");
    let password = form.get("password");
    let first = form.get("first");
    let last = form.get("last");

    await supabaseClient.auth.signOut();

    // sign up the user
    let {
        session: sessionData,
        user,
        error: signUpError,
    } = await supabaseClient.auth.signUp({
        email,
        password,
    });

    if (!signUpError) {
        // create the user in profiles table
        const { data, error: profileError } = await supabaseClient
            .from("profiles")
            .insert([{ email, first, last, id: user?.id }]);

        // if error return
        if (profileError) return { error: profileError };

        // all good, set session and move on
        let session = await getSession(request.headers.get("Cookie"));
        session.set("access_token", sessionData.access_token);
        return redirect("/", {
            headers: {
                "Set-Cookie": await commitSession(session),
            },
        });
    }

    // else return the error
    return { user, signUpError };
};

// https://remix.run/api/conventions#meta
export let meta = () => {
    return {
        title: "Remix Supabase Starter",
        description: "Welcome to remix! Login Page",
    };
};

// https://remix.run/guides/routing#index-routes
export default function CreateAccount() {
    const actionData = useActionData();

    return (
        <div className="remix__page">
            <main>
                <h2>Remix Supabase - Create Account Page</h2>
                <Form method="post" autoComplete="off">
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div className="form_item">
                            <label htmlFor="email">EMAIL ADDRESS:</label>
                            <input id="email" name="email" type="text" />
                        </div>

                        <div className="form_item">
                            <label htmlFor="first">FIRST NAME:</label>
                            <input id="first" name="first" type="text" />
                        </div>

                        <div className="form_item">
                            <label htmlFor="last">LAST NAME:</label>
                            <input id="last" name="last" type="text" />
                        </div>
                        <div className="form_item">
                            <label htmlFor="password">PASSWORD:</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                            />
                        </div>
                        <div className="form_item">
                            <button type="submit">CREATE ACCOUNT</button>
                        </div>

                        <Link
                            to="/login"
                            replace={true}
                            style={{
                                display: "flex",
                                flex: 1,
                                flexDirection: "column",
                                margin: 16,
                                width: 400,
                            }}
                        >
                            CANCEL
                        </Link>
                    </div>
                </Form>
            </main>
        </div>
    );
}
