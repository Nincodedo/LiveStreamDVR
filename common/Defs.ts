export enum SubStatus {
    NONE = "0",
    WAITING = "1",
    SUBSCRIBED = "2",
    FAILED = "3",
}

export enum MuteStatus {
    UNMUTED = 1,
    MUTED = 2,
    UNKNOWN = 3,
}

export enum ExistStatus {
    EXISTS = 1,
    NOT_EXISTS = 2,
    NEVER_EXISTED = 3,
    UNKNOWN = 4,
}

export const VideoQualityArray: string[] = ["best", "1080p60", "1080p", "720p60", "720p", "480p", "360p", "160p", "140p", "worst"];

export const nonGameCategories = [
    "Just Chatting",
    "IRL",
    "Art",
    "Music",
    "Pools, Hot Tubs, and Beaches",
    "Sports",
    "ASMR",
    "Talk Shows & Podcasts",
    "Special Events",
    "Beauty & Body Art",
    "Animals, Aquariums, and Zoos",
    "Travel & Outdoors",
    "Makers & Crafting",
    "Software and Game Development",
    "Science & Technology",
    "Food & Drink",
    "Politics",
    "Fitness & Health",
];

// twitch vod age is 14 days then it's deleted
export const TwitchVodAge = 14 * 24 * 60 * 60 * 1000;