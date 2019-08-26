document
  .getElementById('form1')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form1 = new FormData(document.getElementById('form1'));
    const ep = form1.get('ep');
    const led = form1.get('led');
    const circuit = form1.get('circuit');

    if (!ep || !led || !circuit) return;

    const ohm = 0.1 / ((ep / circuit) / ((3 * led) + 1));
    document.getElementById('ohm')
      .innerHTML = `최적 저항은 <b>${ohm}</b> 입니다.`;

    console.log(form1.get('ep'));
    console.log(form1.get('led'));
    console.log(form1.get('circuit'));
  });
