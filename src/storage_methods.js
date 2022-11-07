export const setLocalStorage = (item) => {
  localStorage.setItem('svelte-app', JSON.stringify(item));
};

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('svelte-app')) || [];
};
