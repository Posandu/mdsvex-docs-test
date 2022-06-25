<script>
	export let pages = [];
	export let activePage = "";
</script>

<div class="docs_sidebar">
	{#each pages as page}
		<a
			href={"/#/" + page.link}
			class={(page.link === activePage ? "active " : " ") + "docs_sidebar_link"}
			>{page.title}</a
		>
	{/each}
</div>

<style>
	.docs_sidebar {
		display: flex;
		flex-direction: column;
		width: 200px;
		background: #ffffff;
	}

	.docs_sidebar_link {
		display: block;
		padding: 8px 20px;
		text-decoration: none;
		color: #333;
		border-radius: 0 50px 50px 0;
		font-size: 13px;
		transition: all 0.2s ease;
	}

	.docs_sidebar_link:hover {
		background: #f5f5f5;
	}

	.active {
		color: #185abc;
		background: #e8f0fe;
	}

	.active:hover {
		background: #dae6fc;
	}
</style>
