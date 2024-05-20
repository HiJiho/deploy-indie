import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

import "98.css";
import styles from "~/styles/_index.module.css";

export const meta: MetaFunction = () => [{ title: "98css" }];
console.log(styles.main);

export default function Index() {
	const user = useOptionalUser();
	return (
		<>
			<aside className={styles.aside}>
				<ul className={`tree-view ${styles.treeView}`}>
					<li>
						<a href="#intro">Intro</a>
					</li>
					<li>
						<a href="#components">Components</a>
						<ul>
							<li>
								<a href="#button">Button</a>
							</li>
							<li>
								<a href="#checkbox">Checkbox</a>
							</li>
							<li>
								<a href="#option-button">OptionButton</a>
							</li>
							<li>
								<a href="#group-box">GroupBox</a>
							</li>
							<li>
								<a href="#text-box">TextBox</a>
							</li>
							<li>
								<a href="#slider">Slider</a>
							</li>
							<li>
								<a href="#dropdown">Dropdown</a>
							</li>
							<li>
								<a href="#window">Window</a>
								<ul>
									<li>
										<a href="#title-bar">Title Bar</a>
									</li>
									<li>
										<a href="#window-contents">Window contents</a>
									</li>
									<li>
										<a href="#status-bar">Status Bar</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#tree-view">TreeView</a>
							</li>
							<li>
								<a href="#tabs">Tabs</a>
							</li>
							<li>
								<a href="#table-view">TableView</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#issues-contributing-etc">Issues, Contributing, etc.</a>
					</li>
				</ul>
			</aside>
			<main className={styles.main}>
				<span>
					<h1 className={styles.h1}>98.css</h1>
				</span>
				<p>A design system for building faithful recreations of old UIs.</p>
				<p>
					<a href="http://npm.im/98.css" rel="nofollow">
						<img
							alt="npm"
							src="https://98badges.now.sh/api/version"
							// style="max-width:100%;"
						/>
					</a>
					<a
						href="https://unpkg.com/98.css"
						rel="nofollow"
						// style="text-decoration: none"
					>
						<img
							alt="gzip size"
							src="https://98badges.now.sh/api/size"
							// style="max-width:100%;"
						/>
					</a>
				</p>
				<h2>Intro</h2>
				<p>
					98.css is a CSS library for building interfaces that look like Windows
					98. See more <a href="https://github.com/jdan/98.css">on GitHub</a>.
				</p>

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
