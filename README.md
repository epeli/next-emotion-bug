# Broken Emotion Source Maps with Nextjs

When using custom server

This works

    ./node_modules/.bin/next

But my custom server does not

    node ./server.js


UPDATE

Explicitly adding `NODE_ENV=development` works

    NODE_ENV=development node ./server.js
