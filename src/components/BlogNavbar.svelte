<script lang="ts">
  let active = "";
</script>

<nav class="flex items-center gap-4 w-full text-[#acacac] py-8">
  <a href="/">
    <span class="text-[#BA1200] text-4xl font-mono font-medium">
      &#123;tk&#125;
    </span>
  </a>

  <span class="flex-grow" />
  <span class="hidden lg:flex gap-4">
    <div class:active={active == "about"}>
      <a
        href="/#about"
        on:click={() => {
          active = "about";
        }}>About me</a
      >
    </div>
    <div class:active={active == "contact"}>
      <a
        href="/#contact"
        on:click={() => {
          active = "contact";
        }}>Contact</a
      >
    </div>
    <div class:active={active == "portfolio"}>
      <a
        href="/#portfolio"
        on:click={() => {
          active = "portfolio";
        }}>Portfolio</a
      >
    </div>
    <div class:active={active == "blog"}>
      <a
        href="/#blog"
        on:click={() => {
          active = "blog";
        }}>Blog</a
      >
    </div>
  </span>
</nav>

<style>
  .active {
    color: #ba1200;
  }

  div {
    position: relative;
    transition-duration: 300ms;
    font-weight: 700;
    color: #acacac;
  }

  div:hover {
    color: #ba1200;
  }

  .active:before,
  div:hover:before {
    position: absolute;
    content: "";
    position: absolute;
    width: 50%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 4px;
    bottom: -2px;
    border-bottom: 2px solid #ba1200;
  }

  div:before {
    position: absolute;
    content: "";
    position: absolute;
    width: 25%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 4px;
    bottom: -5px;
    border-bottom: 2px solid transparent;
    transition-duration: 300ms;
  }
</style>
