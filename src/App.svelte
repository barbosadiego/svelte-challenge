<script>
  import { onMount } from 'svelte';
  import InputItem from './components/InputItem.svelte';
  import ListItem from './components/ListItem.svelte';
  import { getLocalStorage, setLocalStorage } from './storage_methods';

  let items;

  onMount(() => {
    // console.log('app mount');
    items = getLocalStorage();
  });

  const handleAddItem = (e) => {
    items = [e.detail, ...items];
    setLocalStorage(items);
  };
</script>

<main class="container">
  <h1>A Svelte Challenge</h1>
  <InputItem on:add-item={handleAddItem} />
  <ListItem {items} />
</main>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
  }

  h1 {
    font-weight: normal;
    margin-top: 5vh;
    text-transform: uppercase;
  }
</style>
