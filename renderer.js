document
  .getElementById('form1')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const f = new FormData(e.currentTarget());
    let ohm;

    ohm = f.get('ep') / f.get('circuit');
    ohm /= (3 * f.get('led')) + 1;
    ohm = 0.1 / ohm;

    document
      .getElementById('ohm')
      .innerHTML = `최적 저항은 <b>${ohm}</b> 입니다.`;
  });
