<script>
  import InputItem from './components/InputItem.svelte';
  import ListItem from './components/ListItem.svelte';
</script>

<main class="container">
  <h1>A Svelte Challenge</h1>
  <InputItem />
  <ListItem />
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
