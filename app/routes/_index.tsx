import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
// import styles from "~/styles/_index.css";
import styles from "~/styles/_index.modlue.css";

export const meta: MetaFunction = () => [{ title: "98css" }];

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Index() {
	const user = useOptionalUser();
	return (
		<>
			<aside>aside</aside>
			<main>
				<span>
					<h1>98css</h1>
				</span>
				<p>A design system for building faithful recreations of old UIs.</p>
				<div>
					{user ? (
						<Link to="/notes">View Notes for {user.email}</Link>
					) : (
						<div>
							<Link to="/join">Sign up</Link>
							<Link to="/login">Log In</Link>
						</div>
					)}
				</div>
			</main>
		</>
	);
}
