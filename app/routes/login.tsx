import {
    useLoaderData,
    Link,
    Form,
    useActionData,
    NavLink,
} from "@remix-run/react";
import { redirect, json, ActionFunctionArgs } from "@remix-run/node";
import { commitSession, getSession } from "~/utils/session.server";

export let action = async ({ request }: ActionFunctionArgs) => {
    // get user credentials from form
    let form = await request.formData();
    let email = form.get("email");
    let password = form.get("password");

    return null;
};

export default function Login() {
    const actionData = useActionData();

    return (
        <div className="remix__page">
            <main>
                <h2 className="font-bold text-2xl">
                    Welcome to Supabase Remix - Login Page
                </h2>
                <Form method="post">
                    <div className="flex flex-1 items-center flex-col">
                        <div className="form_item">
                            <label htmlFor="email">EMAIL ADDRESS:</label>
                            <input id="email" name="email" type="text" />
                        </div>
                        <div className="form_item">
                            <label htmlFor="password">PASSWORD:</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                            />
                        </div>
                        <div className="flex flex-1 items-center flex-row mt-8">
                            <button
                                className="bg-slate-500 rounded-sm w-fit px-8 mr-4 text-white"
                                type="submit"
                            >
                                LOGIN
                            </button>
                            <NavLink to="/create-account">
                                <button className="bg-slate-500 rounded-sm w-fit px-8 text-white">
                                    CREATE ACCOUNT
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </Form>
            </main>
        </div>
    );
}
