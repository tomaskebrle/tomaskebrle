<script>
  export let allPosts;
  import PostCard from "./PostCard.svelte";
  let filteredPosts = [];
  let search = "";
  $: {
    if (search) {
      filteredPosts = allPosts.filter((post) =>
        post.frontmatter.title.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      filteredPosts = [...allPosts];
    }
  }

  $: console.log(search);
</script>

<section class="pb-16" id="blog" data-aos="fade-up">
  <input
    type="text"
    bind:value={search}
    placeholder="Search"
    class="bg-[#031927] bg-opacity-50 focus:outline-none outline-none p-2 w-full my-8 border-b-2 text-white focus:border-white duration-300"
  />
  <div class="lg:grid gap-4 grid-cols-5 mb-4">
    {#each filteredPosts as post}
      <PostCard {post} />
    {/each}
  </div>
</section>
