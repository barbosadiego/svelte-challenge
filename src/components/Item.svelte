<script>
  import { createEventDispatcher } from 'svelte';
  import { getLocalStorage, setLocalStorage } from '../storage_methods';

  export let item;
  let srcTrash = './assets/trash-solid.svg';
  let srcEdit = './assets/pen-to-square-solid.svg';
  const dispatch = createEventDispatcher();

  function edit(itemId) {
    dispatch('edit', itemId);
  }

  function remove(itemId) {
    dispatch('remove', itemId);
  }
</script>

<div class="item">
  {item.text}
  <div class="controls">
    <button class="edit" on:click={() => edit(item)}>
      <img src={srcEdit} alt="" width="15" height="15" />
    </button>
    <button class="remove" on:click={() => remove(item.id)}>
      <img src={srcTrash} alt="" width="15" height="15" />
    </button>
  </div>
</div>

<style>
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 0.7rem 1rem;
    border-radius: 2px;
    text-align: left;
  }
  .controls {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  button {
    margin: 0;
  }
</style>
