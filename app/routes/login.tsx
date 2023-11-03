import {
    useLoaderData,
    Link,
    Form,
    useActionData,
    NavLink,
} from "@remix-run/react";
import { redirect, json, ActionFunctionArgs } from "@remix-run/node";
import { commitSession, getSession } from "~/utils/session.server";
import AuthContainer from "~/components/auth/AuthContainer";
import { Input } from "~/components/ui/input";
import { ValidatedForm } from "remix-validated-form";
import { Button } from "~/components/ui/button";
import RememberMe from "~/components/auth/RememberMe";
import { validator } from "~/validators/login";

export let action = async ({ request }: ActionFunctionArgs) => {
    // get user credentials from form
    let form = await request.formData();
    let email = form.get("email");
    let password = form.get("password");

    return null;
};

export default function Login() {
    const data: any = useActionData();

    return (
        <AuthContainer>
            <div className="mb-10 sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            {data?.error && (
                <div className="py-3 mb-4 -mt-6 text-center rounded-lg px-full bg-red-50">
                    <p className="px-4 font-normal text-red-600 break-all semibold">
                        {data.error}
                    </p>
                </div>
            )}
            <ValidatedForm validator={validator} method="POST">
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
                    <div className="flex items-center justify-between">
                        <RememberMe />
                        <a
                            href="/password/forgot"
                            className="font-medium text-duuce-red-hover"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <Button>Login</Button>
                    <div className="flex gap-1 mt-4 text-base">
                        <p className="text-gray-500 text-normal">
                            Don't have an account?
                            <a
                                href="/signup"
                                className="font-medium text-duuce-red-hover"
                            >
                                {" "}
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </ValidatedForm>
        </AuthContainer>
    );
}
