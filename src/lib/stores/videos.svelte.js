export const videoLibrary = $state({
    videos: []
});

export function addVideo(file) {
    const video = {
        id: crypto.randomUUID(),
        name: file.name,
        file: file,
        url: URL.createObjectURL(file),
        uploadedAt: new Date()
    };

    videoLibrary.videos.push(video);
}