<script>
  export let items = [];
</script>

{#if items.length}
  <div>
    <h2>Saved items</h2>
    {#each items as item}
      <p>{item.text}</p>
    {/each}
  </div>
{/if}
