window.addEventListener('DOMContentLoaded', () => {
  const lookupBtn = document.getElementById('lookup');
  const citiesBtn = document.getElementById('lookup-cities');
  const input = document.getElementById('country');
  const result = document.getElementById('result');

  function fetchData(extraParams = '') {
    const country = encodeURIComponent(input.value.trim());

    fetch(`world.php?country=${country}${extraParams}`)
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
  }

  lookupBtn.addEventListener('click', () => fetchData());
  citiesBtn.addEventListener('click', () => fetchData('&lookup=cities'));
});