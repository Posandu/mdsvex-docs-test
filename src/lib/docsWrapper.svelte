<script>
	import Sidebar from "./sidebar.svelte";
	import Docs from "./docs.svelte";
	import Header from "./header.svelte";
	import Index from "../pages/index.svelte";

	import { url } from "./utils";

	export let pages = [];

	/**
	 * Page Titles
	 */
	let pageTitles;

	$: {
		pageTitles = pages.map((page) => {
			return {
				title: page.metadata.title,
				link: url(page.metadata.path || page.metadata.title),
			};
		});
	}

	/**
	 * Active Page
	 */
	let activePage = pages[0].metadata.title;
	let hash = window.location.hash;

	function getHash() {
		let str = window.location.hash.slice(2);
		str = url(decodeURI(str));
		hash = str;
		return hash;
	}

	window.addEventListener("hashchange", () => {
		activePage = getHash();
	});

	activePage = getHash();
</script>

<Docs>
	<Header />

	<div class="docs_wrapper">
		<Sidebar pages={pageTitles} {activePage} />

		<div class="docs_content">
			{#each pages as Page, i}
				{#if pageTitles[i].link === activePage}
					<Page.default />
				{/if}
			{/each}

			{#if activePage === ""}
				<Index />
			{/if}
		</div>
	</div>
</Docs>

<style>
	.docs_wrapper {
		display: flex;
	}

	.docs_content {
		flex: 1;
		background: white;
		padding: 0 20px;
		max-height: calc(100vh - 60px);
		min-height: calc(100vh - 60px);
		overflow: auto;
	}
</style>
