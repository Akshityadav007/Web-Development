import { VideoCard } from "./VideoCard";

const VIDEOS = [
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "Why Ghosts Don't Haunt Asians",
        author: "Steven He",
        views: "27M views",
        timestamp: "3 years ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "The Evolution of Smartphones in 2024",
        author: "Tech Explained",
        views: "1.5M views",
        timestamp: "1 week ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "The Perfect Pasta Recipe: Step by Step",
        author: "Chef John",
        views: "5.3M views",
        timestamp: "2 months ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "Top 10 Unsolved Mysteries of Space",
        author: "Science Channel",
        views: "12M views",
        timestamp: "4 years ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "Epic Warzone Victory with No Kills",
        author: "Gamer Dude",
        views: "920K views",
        timestamp: "3 weeks ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "React.js Hooks: Complete Guide for Beginners",
        author: "Dev Channel",
        views: "800K views",
        timestamp: "1 month ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "30-Minute Full Body Workout at Home",
        author: "Fit Life",
        views: "2.4M views",
        timestamp: "6 months ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "Blockbuster Movie Official Trailer 2024",
        author: "Hollywood Studio",
        views: "17M views",
        timestamp: "1 month ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "Exploring the Hidden Gems of Bali",
        author: "Adventure Guide",
        views: "500K views",
        timestamp: "2 weeks ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "Top Hit Song Official Music Video",
        author: "Artist Channel",
        views: "30M views",
        timestamp: "3 months ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "Ancient Civilizations: Lost Wonders of the World",
        author: "History 101",
        views: "4.5M views",
        timestamp: "2 years ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "How to Paint Landscapes in Watercolor",
        author: "Creative Space",
        views: "750K views",
        timestamp: "7 months ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "Top 10 Electric Cars of 2024: In-depth Review",
        author: "Car Expert",
        views: "1.2M views",
        timestamp: "3 months ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "NBA Finals 2024: Best Moments",
        author: "Sports Center",
        views: "9M views",
        timestamp: "4 months ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "Funniest Comedy Skits of the Year",
        author: "Laugh Factory",
        views: "3.6M views",
        timestamp: "1 year ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "Breaking News: Major Global Events",
        author: "World News",
        views: "800K views",
        timestamp: "2 days ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "Top 10 Cutest Animal Videos Ever",
        author: "Animal Friends",
        views: "10M views",
        timestamp: "5 years ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "Simple Everyday Makeup Routine",
        author: "Beauty Guru",
        views: "3.2M views",
        timestamp: "9 months ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "How to Stay Motivated and Achieve Your Goals",
        author: "Self Growth",
        views: "2.8M views",
        timestamp: "1 year ago"
    },
    {
        thumbnailImage: "sample_thumbnail.jpg",
        channelImage: "sample_channel_image.jpg",
        title: "10 Easy Gardening Tips for Beginners",
        author: "Green Thumb",
        views: "500K views",
        timestamp: "4 months ago"
    }
];


export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {VIDEOS.map(video => <div>
            <VideoCard 
                thumbnailImage = {video.thumbnailImage}
                channelImage = {video.channelImage}
                title = {video.title}
                author = {video.author}
                views = {video.views}
                timestamp = {video.timestamp}
            />
        </div>)}
    </div>
}