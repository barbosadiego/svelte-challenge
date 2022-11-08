<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import InputItem from './components/InputItem.svelte';
  import ListItem from './components/ListItem.svelte';
  import Loading from './components/Loading.svelte';
  import Modal from './components/Modal.svelte';
  import { getLocalStorage, setLocalStorage } from './storage_methods';

  let itens;
  let showModal = false;
  let editItem;

  onMount(() => {
    itens = getLocalStorage();
  });

  const handleAddItem = (e) => {
    itens = [e.detail, ...itens];
    setLocalStorage(itens);
  };

  const remove = (id) => {
    const itemId = id.detail;
    const itensStoraged = getLocalStorage();
    const newItens = itensStoraged.filter((item) => item.id !== itemId);
    itens = newItens;
    setLocalStorage(newItens);
  };

  const edit = (item) => {
    showModal = true;
    editItem = item.detail;
  };

  const handleEdit = (itemId) => {
    const newText = itemId.detail.text;
    const id = itemId.detail.id;
    const itensStoraged = getLocalStorage();
    const changedList = itensStoraged.map((item) => {
      if (item.id === id) {
        return { id: id, text: newText };
      } else {
        return item;
      }
    });

    setLocalStorage(changedList);
    showModal = false;
    itens = itens;
  };
</script>

<main class="container">
  {#if showModal}
    <Loading />
    <div transition:fade={{ duration: 100 }}>
      <Modal
        {editItem}
        on:close-modal={() => (showModal = false)}
        on:handle-edit={handleEdit}
      />
    </div>
  {/if}

  <h1>A Svelte Challenge</h1>

  <InputItem on:add-item={handleAddItem} />

  <ListItem {itens} on:edit={edit} on:remove={remove} />
</main>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-weight: normal;
    margin-top: 5vh;
    text-transform: uppercase;
  }
</style>
