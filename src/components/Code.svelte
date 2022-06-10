<script>
  import { onMount } from "svelte";
  import { Confetti } from "svelte-confetti";
  import ToggleConfetti from "./ToggleConfetti.svelte";
  let codeElement;
  export let filename;

  const copyCode = () => {
    navigator.clipboard.writeText(codeElement.innerText);
  };
</script>

<section class="bg-[#0d1117] not-prose">
  <div class="flex">
    <div class="font-mono mb-2 select-none">{filename}</div>
    <div class="flex-grow" />
    <ToggleConfetti>
      <span
        class="material-symbols-outlined cursor-pointer"
        slot="label"
        on:click={copyCode}
      >
        content_copy
      </span>
      <Confetti x={[-0.5, 0.5]} y={[0.25, 1, -0.25, -1]} amount={100} />
    </ToggleConfetti>
  </div>
  <div id="code" bind:this={codeElement}><slot /></div>
</section>

<style>
  section {
    color: var(--tw-prose-pre-code);
    overflow-x: auto;
    font-weight: 400;
    overflow: hidden;
    font-size: 0.875em;
    line-height: 1.7142857;
    margin-top: 1.7142857em;
    margin-bottom: 1.7142857em;
    border-radius: 0.375rem;
    padding-top: 0.8571429em;
    padding-right: 1.1428571em;
    padding-bottom: 0.8571429em;
    padding-left: 1.1428571em;
  }
</style>
