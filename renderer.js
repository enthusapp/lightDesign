document
  .getElementById('formTest')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = new FormData(e.currentTarget);
    console.log(data.get('ep'));
    console.log(data.get('led'));
    console.log(data.get('circuit'));
  });

/*
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
*/
