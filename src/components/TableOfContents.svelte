<script>
  import { onMount } from "svelte";
  let titlesDocument = [];
  let titles;
  onMount(async () => {
    titlesDocument = document.querySelectorAll(
      "article :is(h1, h2, h3, h4, h5, h6)"
    );
    titles = Array.from(titlesDocument).map((title) => ({
      id: `#${title.id}`,
      text: title.innerText,
      level: `pl-[${title.nodeName.split("H")[1] * 0.25 * 6}rem]`,
    }));
  });
</script>

{#if titles}
  <div class="fixed pt-64">
    {#each titles as title}
      <a href={title.id}>
        <div
          class="border-l-4 hover:border-[#BA1200] border-[#010c13] text-white text-lg {title.level} py-[3px]"
        >
          {title.text}
        </div>
      </a>
    {/each}
  </div>
{/if}
