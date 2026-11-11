window.addEventListener('DOMContentLoaded', () => {
  const lookupBtn = document.getElementById('lookup');
  const input = document.getElementById('country');
  const result = document.getElementById('result');

  lookupBtn.addEventListener('click', () => {
    const country = encodeURIComponent(input.value.trim());

    fetch(`world.php?country=${country}`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(data => {
        result.innerHTML = data;
      })
      .catch(error => {
        result.innerHTML = 'There was a problem fetching the data.';
        console.error(error);
      });
  });
});