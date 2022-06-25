<script>
	let scrolling = false;
</script>

<header class={scrolling ? "scrolling" : ""}>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a href="#">Header!</a>
</header>

<style>
	header {
		background: #ffffff;
		padding: 20px;
		max-height: 16px;
		overflow: hidden;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #e8eaed;
	}

	header a {
		color: #5f6368;
		font-size: 24px;
		font-weight: 600;
		text-decoration: none;
	}
</style>
