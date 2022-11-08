<script>
  import Item from './Item.svelte';
  import { fade, scale } from 'svelte/transition';

  export let itens = [];
</script>

{#if itens.length}
  <div class="list-itens">
    <h2>Saved itens</h2>
    {#each itens as item (item.id)}
      <div in:fade out:scale>
        <Item {item} on:edit on:remove />
      </div>
    {/each}
  </div>
{/if}

<style>
  .list-itens {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
