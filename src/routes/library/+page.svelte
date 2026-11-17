<script>
    import { videoLibrary } from '$lib/stores/videos.svelte.js';
    import { fly } from 'svelte/transition';

    let selectedVideoId = $state(null);
    let selectedVideo = $derived(
        videoLibrary.videos.find(v => v.id === selectedVideoId)
    );
</script>

<div class="library-layout" class:has-selection={selectedVideo}>
    <main>
        {#if videoLibrary.videos.length === 0}
            <p>You haven't uploaded any videos yet.</p>
        {:else}
            <div class="video-grid">
                {#each videoLibrary.videos as video (video.id)}
                    <button
                        class="video-card"
                        class:selected={selectedVideoId === video.id}
                        onclick={() => selectedVideoId = video.id}
                    >
                        <video src={video.url} muted preload="metadata"></video>
                        <p>{video.name}</p>
                    </button>
                {/each}
            </div>
        {/if}
    </main>

    {#if selectedVideo}
        <aside class="video-sidebar" transition:fly={{ x: 20, duration: 300 }}>
            <button class="close-button" onclick={() => selectedVideoId = null}>
                ✕
            </button>

            <h2>Video Details</h2>

            <video class="sidebar-video" src={selectedVideo.url} controls></video>

            <h3>{selectedVideo.name}</h3>
            <p>Uploaded: {selectedVideo.uploadedAt.toLocaleDateString()}</p>
        </aside>
    {/if}
</div>

<style>
.library-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 2rem;
    color: #f0ebdd;
    font-family: 'Inter', serif;
	min-height: calc(100dvh - 107px);
}

.library-layout.has-selection {
    grid-template-columns: minmax(0, 1fr) 340px;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
}

.video-card {
    padding: 0.5rem;
    border: 2px solid transparent;
    border-radius: 12px;
    background: transparent;
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: inherit;
    transition: border-color 0.2s ease;
}

.video-card:hover {
    border-color: #b9b4a6;
}

.video-card.selected {
    border-color: #4d9b72;
}

.video-card video {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 8px;
    background: #222;
}

.video-sidebar {
    padding: 1.25rem;
    border-left: 1px solid #d6d2c8;
	background-color: #3b694a;
}

.sidebar-video {
    width: 100%;
    border-radius: 8px;
}

.close-button {
    float: right;
    cursor: pointer;
}

@media (max-width: 750px) {
    .library-layout,
    .library-layout.has-selection {
        grid-template-columns: minmax(0, 1fr);
        padding: 1.5rem;
    }

    .video-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>