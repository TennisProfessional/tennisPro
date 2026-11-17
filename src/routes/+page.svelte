<!-- AI Assistance was used to create and implement the button functionality for this page -->
<script>
	import {addVideo} from '$lib/stores/videos.svelte.js';

	function videoUpload(event) {
		const file = event.target.files[0];
		if (!file) return;

		addVideo(file);

		console.log("Video added to library:", file.name);
		event.target.value = "";
	}
</script>


<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&display=swap"
		rel="stylesheet"
	/>
	<title>TennisPro</title>
</svelte:head>

<section class="flex flex-1 flex-col items-center justify-center bg-center bg-no-repeat bg-contain" style="background-image: url('/images/tenniscourt.png'); background-size: 67% auto;">
	<div class="hero-copy">
		<h1 class="home-subtitle">Analyze every frame.</h1>
		<p class="home-title">Perfect your stroke.</p>
		<label class="upload-button">
			<input class="upload-input" type="file" accept=".mp4,video/mp4" onchange={videoUpload}/>
			<span>UPLOAD MATCH</span>
			<svg
				aria-hidden="true"
				class="upload-arrow"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path d="M12 19V5m0 0L6 11m6-6 6 6" />
			</svg>
		</label>
	</div>
</section>

<style>
	.hero-copy {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		transform: translateY(-.8rem);
	}

	.upload-button {
		display: inline-flex;
		align-items: center;
		margin-top: 1.5rem;
		padding: 0.9rem 1.6rem;
		border-radius: 9999px;
		background-color: #f0ebdd;
		font-family: 'Inter', sans-serif;
		font-size: 12px;
		letter-spacing: 2.6px;
		cursor: pointer;
	}

	.upload-button:hover {
		background-color: #fff;
	}

	.upload-button:focus-within {
		outline: 2px solid #fff;
		outline-offset: 3px;
	}

	.upload-input {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		clip-path: inset(50%);
	}

	.upload-arrow {
		width: 1rem;
		height: 1rem;
		stroke: currentColor;
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.home-subtitle,
	.home-title {
		font-family: 'Playfair Display', serif;
		font-weight: 400;
		color: #f0ebdd;
	}

	.home-subtitle {
		font-size: 33px;
		font-style: italic;
		line-height: 20px;
	}

	.home-title {
		font-size: 66px;
		line-height: 76px;
		letter-spacing: -0.72px;
	}
</style>
