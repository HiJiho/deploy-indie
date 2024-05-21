import type { LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "~/db.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const host =
		request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");

	console.log("Healthcheck initiated");

	try {
		const url = new URL("/", `http://${host}`);
		console.log(`Connecting to the database at host: ${host}`);

		// Perform a simple query to check the database connection
		const userCount = await prisma.user.count();
		console.log(`User count: ${userCount}`);

		console.log(`Making a HEAD request to URL: ${url.toString()}`);
		await fetch(url.toString(), { method: "HEAD" }).then((r) => {
			if (!r.ok) return Promise.reject(r);
			console.log("HEAD request successful");
		});

		console.log("Healthcheck passed");
		return new Response("OK");
	} catch (error: unknown) {
		console.error("Healthcheck ❌", { error });
		return new Response("ERROR", { status: 500 });
	}
};
