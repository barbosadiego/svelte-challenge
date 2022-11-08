<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let editItem = {};

  const closeModal = () => {
    dispatch('close-modal');
  };

  const handleEdit = () => {
    const changedItem = editItem;
    dispatch('handle-edit', changedItem);
  };
</script>

<div class="modal">
  <div class="content">
    <button class="close" on:click={closeModal}>X</button>
    <h3>Update your item</h3>
    <div>
      <input type="text" bind:value={editItem.text} />
      <button on:click={handleEdit}>Done</button>
    </div>
    <small class="id">Item id: {editItem.id}</small>
  </div>
</div>

<style>
  .modal {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .content {
    margin: 1rem;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    padding: 1rem;
    border-radius: 2px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .content > div {
    width: 100%;
    display: flex;
    gap: 5px;
  }

  .content > div input {
    flex: 1;
  }

  .id {
    align-self: start;
  }

  .close {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
</style>
