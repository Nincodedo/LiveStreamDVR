import chalk from "chalk";
import history from "connect-history-api-fallback";
import fs from "fs";
import express from "express";
import morgan from "morgan";
import path from "path";
import { AppName, AppRoot, BaseConfigFolder } from "./Core/BaseConfig";
import { TwitchConfig } from "./Core/TwitchConfig";
import ApiRouter from "./Routes/Api";

if (!fs.existsSync(path.join(BaseConfigFolder.client, "index.html"))) {
    console.log(chalk.red("Client is not built. Please run yarn build inside the client-vue folder."));
    process.exit(1);
}

const override_port = process.argv && process.argv.length > 2 && process.argv[2] ? parseInt(process.argv[2]) : undefined;

TwitchConfig.init().then(() => {

    const app = express();
    const port = override_port || TwitchConfig.cfg<number>("server_port", 8080);

    const basepath = TwitchConfig.cfg<string>("basepath", "");

    app.use(express.json());
    app.use(morgan("dev"));

    // app.get("/", (req, res) => {
    //     // res.send(TwitchConfig.cfg<string>("app_url", "test"));
    //     res.send(TwitchConfig.config);
    // });

    const baserouter = express.Router();

    baserouter.use("/api/v0", ApiRouter);

    // single page app
    // baserouter.use(history());
    baserouter.use(express.static(BaseConfigFolder.client));
    baserouter.use("/vodplayer", express.static(BaseConfigFolder.vodplayer));
    baserouter.use("/vods", express.static(BaseConfigFolder.vod));
    baserouter.use("/saved_vods", express.static(BaseConfigFolder.saved_vods));
    baserouter.use("/saved_clips", express.static(BaseConfigFolder.saved_clips));

    baserouter.use("*", (req, res) => {
        res.sendFile(path.join(BaseConfigFolder.client, "index.html"));
    });

    app.use(basepath, baserouter);

    app.listen(port, () => {
        console.log(chalk.greenBright(`${AppName} listening on port ${port}, mode ${process.env.NODE_ENV}. Base path: ${basepath}`));
        if (process.env.npm_lifecycle_script?.includes("index.ts")){
            console.log(chalk.greenBright("Running with TypeScript"));
        } else {
            console.log(chalk.greenBright("Running with plain JS"));
        }
    });

});