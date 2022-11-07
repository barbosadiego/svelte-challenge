<script>
  import { setLocalStorage, getLocalStorage } from '../storage_methods';
  let text = '';

  const handleSubmit = () => {
    const date = new Date();
    const newItem = {
      id: date.getTime(), // id bult from a date
      text,
    };
    text = '';
    setLocalStorage([newItem, ...getLocalStorage()]);
  };

  console.log(getLocalStorage());
</script>

<form class="form" on:submit|preventDefault={handleSubmit}>
  <input bind:value={text} type="text" placeholder="Insert an item here..." />
  <input type="submit" value="Insert" />
</form>

<style>
  .form {
    margin-top: 1rem;
    display: grid;
  }

  input:not(input[type='submit']) {
    width: 100%;
  }

  input[type='submit'] {
    cursor: pointer;
    justify-self: center;
  }
</style>
