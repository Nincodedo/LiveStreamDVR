import { TwitchChannel } from "Core/TwitchChannel";
import { TwitchVOD } from "Core/TwitchVOD";
import express from "express";

export function ListVodsInMemory(req: express.Request, res: express.Response): void {
    res.send({
        status: "OK",
        data: TwitchVOD.vods,
    });
}

export function ListChannelsInMemory(req: express.Request, res: express.Response): void {
    res.send({
        status: "OK",
        data: TwitchChannel.channels,
    });
}