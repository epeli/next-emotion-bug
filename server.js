const next = require("next");
const Koa = require("koa");

const dev = process.env.NODE_ENV !== "production";

const port = parseInt(process.env.PORT || "3000", 10);

async function startServer() {
    const app = next({
        dev,
    });
    await app.prepare();
    const server = new Koa();
    const handle = app.getRequestHandler();

    server.use(async (ctx, next) => {
        return handle(ctx.req, ctx.res);
    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
}

startServer();
