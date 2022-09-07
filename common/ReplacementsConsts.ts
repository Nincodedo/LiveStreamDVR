import { TemplateFields } from "./Replacements";

export const VodBasenameFields: TemplateFields = {
    login: { display: "MooseStreamer" },
    date: { display: "2022-12-31T12_05_04Z" },
    year: { display: "2022" },
    year_short: { display: "22" },
    month: { display: "12" },
    day: { display: "31" },
    hour: { display: "12" },
    minute: { display: "05" },
    second: { display: "04" },
    id: { display: "123456789" },
    season: { display: "202212" },
    absolute_season: { display: "5" },
    episode: { display: "3" },
};

export const ClipBasenameFields: TemplateFields = {
    id: { display: "MinimalMooseOtterCatcher1234" },
    quality: { display: "720p" },
    clip_date: { display: "2020-01-01" },
    title: { display: "Moose crosses river" },
    creator: { display: "MooseClipper" },
    broadcaster: { display: "MooseStreamer" },
};

export const ExporterFilenameFields: TemplateFields = {
    login: { display: "Username" },
    title: { display: "Title" },
    stream_number: { display: "5" },
    comment: { display: "Comment" },
    date: { display: "2020-12-31" },
    year: { display: "2020" },
    month: { display: "12" },
    day: { display: "31" },
    resolution: { display: "1080p" },
};