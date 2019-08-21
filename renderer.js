document
  .getElementById('button')
  .addEventListener('click', () => {
    const ep = document.getElementById('ep').value;
    const led = document.getElementById('led').value;
    const circuit = document.getElementById('circuit').value;
    const ohm = 0.1 / ((ep / circuit) / ((3 * led) + 1));
    document.getElementById('ohm').innerHTML = ohm;
  });
