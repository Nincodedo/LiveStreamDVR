import express from "express";
import * as Settings from "@/Controllers/Settings";
import * as Channels from "@/Controllers/Channels";
import * as Log from "@/Controllers/Log";
import * as Vod from "@/Controllers/Vod";
import * as Games from "@/Controllers/Games";
import * as About from "@/Controllers/About";
import * as Jobs from "@/Controllers/Jobs";
import * as Subscriptions from "@/Controllers/Subscriptions";
import * as Cron from "@/Controllers/Cron";
import { TwitchVOD } from "@/Core/TwitchVOD";

const router = express.Router();

router.get("/settings", Settings.GetSettings);
router.put("/settings", Settings.SaveSettings);

router.get("/channels", Channels.ListChannels);
router.post("/channels", Channels.AddChannel);
router.get("/channels/:login", Channels.GetChannel);

router.get("/vod/:basename", Vod.GetVod);

router.get("/games", Games.ListGames);

router.get("/about", About.About);

router.get("/log/:filename/?:last_line?", Log.GetLog);

router.get("/jobs", Jobs.ListJobs);
router.delete("/jobs/:name", Jobs.KillJob);

router.get("/subscriptions", Subscriptions.ListSubscriptions);
router.post("/subscriptions", Subscriptions.SubscribeToAllChannels);
router.delete("/subscriptions/:sub_id", Subscriptions.UnsubscribeFromId);

router.get("/cron/check_deleted_vods", Cron.CheckDeletedVods);
router.get("/cron/check_muted_vods", Cron.CheckMutedVods);

router.get("/test_video_download", (req, res) => {
    if (!req.query.video_id){
        res.send("Missing video_id");
        return;
    }

    TwitchVOD.downloadVideo(req.query.video_id as string, "best", req.query.video_id as string + ".mp4")
        .then(() => {
            res.send("OK");
        })
        .catch(() => {
            res.send("FAIL");
        });
});

export default router;