<script lang="ts">
  import { Language } from "../types";
  let active = "about";

  export let language: Language;
</script>

<nav class="py-8 flex items-center gap-4 w-full text-[#acacac]">
  <a href="/">
    <span class="text-[#BA1200] text-4xl font-mono font-medium m-4">
      &#123;tk&#125;
    </span>
  </a>
  <span class="hidden lg:flex gap-4">
    <div class:active={active == "about"}>
      <a
        href="/#about"
        on:click={() => {
          active = "about";
        }}>{language.nav.about}</a
      >
    </div>

    <div class:active={active == "portfolio"}>
      <a
        href="/#portfolio"
        on:click={() => {
          active = "portfolio";
        }}>{language.nav.portfolio}</a
      >
    </div>
    <div class:active={active == "contact"}>
      <a
        href="/#contact"
        on:click={() => {
          active = "contact";
        }}>{language.nav.contact}</a
      >
    </div>
    <div class:active={active == "blog"}>
      <a
        href="/#blog"
        on:click={() => {
          active = "blog";
        }}>{language.nav.blog}</a
      >
    </div>
  </span>
  <span class="flex-grow" />
  <a
    href="mailto:contact@tomaskebrle.cz"
    class="font-bold hover:text-[#ba1200] duration-300"
    >contact@tomaskebrle.cz</a
  >
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

  div:hover:before,
  .active:before {
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
