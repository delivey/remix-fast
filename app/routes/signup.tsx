import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Signup" },
        { name: "description", content: "Signup for an account" },
    ];
};

export default function Signup() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <h1>Signup</h1>
        </div>
    );
}
