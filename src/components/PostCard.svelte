<script>
  export let post;
</script>

<a href={post.url}>
  <article
    class="bg-[#010C13] rounded-2xl hover:-translate-y-3 p-4 duration-300 text-white ring-[#BA1200] hover:ring-4 grid grid-flow-row m-2 lg:m-0"
  >
    <span class="text-[#acacac] italic">{post.frontmatter.publishDate}</span>
    <div class="row-2 self-end">
      <h3 class="text-2xl font-mono">{post.frontmatter.title}</h3>
      <p class="my-2 text-[#acacac]">
        {post.frontmatter.description}
      </p>
    </div>
  </article>
</a>

<style>
  article {
    grid-template-rows: 25px 180px;
  }

  @media (min-width: 1024px) {
    article {
      grid-template-rows: 25px 350px;
    }
  }
</style>
