<script>
	import DocsWrapper from "./lib/docsWrapper.svelte";

	import * as Home from "./pages/home.svx";
	import * as About from "./pages/about.svx";
</script>

<DocsWrapper pages={[Home, About]} />
