document
  .getElementById('button')
  .addEventListener('click', () => {
    const ep = Number(document.getElementById('ep').value);
    const led = Number(document.getElementById('led').value);
    const circuit = Number(document.getElementById('circuit').value);

    if (!ep || !led || !circuit) return;

    const ohm = 0.1 / ((ep / circuit) / ((3 * led) + 1));
    document.getElementById('ohm')
      .innerHTML = `최적 저항은 <b>${ohm}</b> 입니다.`;
  });
