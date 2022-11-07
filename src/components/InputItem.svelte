<script>
  import { createEventDispatcher } from 'svelte';

  let text = '';
  const min = 5;
  const dispatch = createEventDispatcher();

  const handleSubmit = () => {
    if (text.length >= min) {
      const date = new Date();

      const newItem = {
        id: date.getTime(), // id bult from a date
        text,
      };

      dispatch('add-item', newItem);

      text = '';
    } else {
      alert(`Item must be at last ${min} characters`);
    }
  };
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
