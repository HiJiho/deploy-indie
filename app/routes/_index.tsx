import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import classNames from "classnames";
import { useOptionalUser } from "~/utils";

import "98.css";
import styles from "~/styles/_index.module.css";

export const meta: MetaFunction = () => [{ title: "98css" }];

export default function Index() {
	const user = useOptionalUser();

	return (
		<>
			<aside className={styles.aside}>
				<ul className={classNames("tree-view", styles.treeView)}>
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
				<div className={classNames("window", styles.window)}>
					<div className="title-bar">
						<div className="title-bar-text">My first VB4 Program</div>
					</div>
					<div className="title-bar-controls">
						<button aria-label="Minimize" />
						<button aria-label="Maximize" />
						<button aria-label="Close" />
					</div>
					<div className="window-body">
						<p>Hello, world!</p>
						<section className={classNames("field-row", styles.fieldRow)}>
							<button>OK</button>
							<button>Cancel</button>
						</section>
					</div>
				</div>
				<p>
					This library relies on the usage of <strong>semantic HTML</strong>. To
					make a button, you'll need to use a <code>&lt;button&gt;</code>. Input
					elements require labels. Icon buttons rely on
					<code>aria-label</code>. This page will guide you through that
					process, but accessibility is a primary goal of this project.
				</p>
				<p>
					You can override many of the styles of your elements while maintaining
					the appearance provided by this library. Need more padding on your
					buttons? Go for it. Need to add some color to your input labels? Be
					our guest.
				</p>
				<p>
					<strong>This library does not contain any JavaScript</strong>, it
					merely styles your HTML with some CSS. This means 98.css is compatible
					with your frontend framework of choice.
				</p>
				<p>
					Here is an example of{" "}
					<a href="https://codesandbox.io/s/objective-chandrasekhar-t5t6h?file=/src/index.js">
						98.css used with React
					</a>
					, and{" "}
					<a href="https://codesandbox.io/s/late-sound-miqho?file=/index.html">
						an example with vanilla JavaScript
					</a>
					. The fastest way to use 98.css is to import it from unpkg.
				</p>

				<pre className={styles.pre}>
					<code>
						{"<"}link{"\n  "}
						rel="stylesheet"{"\n  "}
						href="https://unpkg.com/98.css"{"\n"}
						{">"}
					</code>
				</pre>
				<p>
					You can install 98.css from the{" "}
					<a href="https://github.com/jdan/98.css/releases">
						GitHub releases page
					</a>
					, or <a href="https://www.npmjs.com/package/98.css">from npm</a>.
				</p>
				<pre className={styles.pre}>
					<code>npm install 98.css</code>
				</pre>

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
