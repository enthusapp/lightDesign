const decimalAdjust = (type, val, ex) => {
  let value = val;
  let exp = ex;

  if (typeof exp === 'undefined' || +exp === 0) return Math[type](value);

  value = +value;
  exp = +exp;

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) return NaN;

  value = value.toString().split('e');
  value = Math[type](+`${value[0]}e${value[1] ? +value[1] - exp : -exp}`);

  value = value.toString().split('e');
  return +`${value[0]}e${value[1] ? +value[1] + exp : exp}`;
};

document
  .getElementById('form1')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const f = new FormData(e.currentTarget);

    let currentForOneLED;
    let ohm;

    if (f.get('driver') === 'aur6601') {
      currentForOneLED = f.get('ep') / f.get('circuit') / ((3 * f.get('led')) + 1);
    } if (f.get('driver') === 'lm317') {
      currentForOneLED = f.get('ep') / f.get('circuit') / 24;
    }

    if (f.get('driver') === 'aur6601') {
      ohm = 0.1 / currentForOneLED;
    } if (f.get('driver') === 'lm317') {
      ohm = 1.25 / currentForOneLED;
    }

    document
      .getElementById('ohm')
      .innerHTML = `최적 저항은 <b>${
        decimalAdjust('round', ohm, -2)
      }</b> Ω 입니다.`;

    document
      .getElementById('current')
      .innerHTML = `전체 전류는 <b>${
        decimalAdjust('round', currentForOneLED * f.get('led'), -2)
      }</b> A 입니다.`;
  });
