import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <div>
            <h1>Auth</h1>
            <ul>
                <li>
                    <a target="_blank" href="/login" rel="noreferrer">
                        Login
                    </a>
                </li>
                <li>
                    <a target="_blank" href="/signup" rel="noreferrer">
                        Signup
                    </a>
                </li>
            </ul>
        </div>
    );
}
