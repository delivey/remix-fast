import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Login" },
        { name: "description", content: "Login to your account" },
    ];
};

export default function Login() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <h1>Login</h1>
        </div>
    );
}
