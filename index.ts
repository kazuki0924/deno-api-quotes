import {
	Application,
	Router
} from "https://deno.land/x/denotrain@v0.5.0/mod.ts";
import { quotes } from "./quotes.ts";

// Create a new application (port defaults to 3000, hostname to 0.0.0.0)
const app = new Application({});
// Optional: Generate router and hook routes to it
const router = new Router();

app.use("/api", router)


app.get("/", (ctx) => {
	return { hello: "world" };
});

router.get("/quotes", (ctx) => {
	return { "quotes": quotes };
});

await app.run();
