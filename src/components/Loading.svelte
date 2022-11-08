<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let src = './assets/spin-icon.svg';
  let showLoading = true;

  onMount(() => {
    setTimeout(() => {
      showLoading = false;
    }, 500);
  });
</script>

{#if showLoading}
  <div class="loading" out:fade={{ duration: 300 }}>
    <h4>Loading...</h4>
    <img {src} alt="" width="50" />
  </div>
{/if}

<style>
  .loading {
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
