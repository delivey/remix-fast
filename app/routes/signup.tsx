import {
    ActionFunctionArgs,
    LoaderFunctionArgs,
    json,
    redirect,
} from "@remix-run/node";
import { useLoaderData, Link, Form, useActionData } from "@remix-run/react";
import { supabase } from "~/database/db.server";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ValidatedForm } from "remix-validated-form";
import { validator } from "~/validators/signup";
import AuthContainer from "~/components/auth/AuthContainer";

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
        <AuthContainer>
            <div className="mb-10 sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-900 ">
                    Create an account
                </h2>
            </div>

            {data?.error && (
                <div className="py-3 mb-4 -mt-6 text-center rounded-lg px-full bg-red-50">
                    <p className="px-4 font-normal text-red-600 break-all semibold">
                        {data.error}
                    </p>
                </div>
            )}
            <ValidatedForm
                validator={validator}
                method="POST"
                resetAfterSubmit={true}
            >
                <div className="space-y-6">
                    <Input
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="••••••••••"
                    />
                    <Input
                        name="confirm_password"
                        type="password"
                        placeholder="••••••••••"
                    />
                    <Button>Sign up</Button>
                    <div className="flex gap-1 mt-4 text-base">
                        <p className="text-gray-500 text-normal">
                            Already have an account?
                            <a
                                href="/login"
                                className="ml-2 font-medium text-duuce-red-hover hover:text-duuce-red-light"
                            >
                                Login instead
                            </a>
                        </p>
                    </div>
                </div>
            </ValidatedForm>
        </AuthContainer>
    );
}
