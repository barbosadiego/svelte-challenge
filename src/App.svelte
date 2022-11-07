<script>
  import { onMount } from 'svelte';
  import InputItem from './components/InputItem.svelte';
  import ListItem from './components/ListItem.svelte';
  import { getLocalStorage, setLocalStorage } from './storage_methods';

  let itens;

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

  const edit = (itemId) => {
    console.log('edit', itemId.detail.text);
  };
</script>

<main class="container">
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
