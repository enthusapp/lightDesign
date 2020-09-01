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

window.onload = () => {
  const url = (new URL(window.location.href)).searchParams;
  const driver = url.get('driver');
  const ep = url.get('ep');
  const circuit = url.get('circuit');
  const led = url.get('led');
  const driverArr = document.getElementsByName('driver');

  let currentForOneLED;
  let ohm;
  if (driver === 'aur6601') {
    currentForOneLED = ep / circuit / ((3 * led) + 1);
    ohm = 0.1 / currentForOneLED;
  } else {
    currentForOneLED = ep / circuit / 24;
    ohm = 1.25 / currentForOneLED;
  }

  driverArr.forEach((e) => {
    if (e.value === driver) {
      e.checked = true;
    }
  });

  document
    .getElementById('ep').value = `${ep}`;
  document
    .getElementById('led').value = `${led}`;
  document
    .getElementById('circuit').value = `${circuit}`;

  if (ohm) {
    document
      .getElementById('ohm')
      .innerHTML = `최적 저항은 <b>${
        decimalAdjust('round', ohm, -2)
      }</b> Ω 입니다.`;
    document
      .getElementById('current')
      .innerHTML = `전체 전류는 <b>${
        decimalAdjust('round', currentForOneLED * led, -2)
      }</b> A 입니다.`;
  }
};
