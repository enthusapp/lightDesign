window.onload = function main() {
  const element = document.getElementById('button');
  element.addEventListener('click', getOhm, false);
};
function getOhm() {
  const a = document.getElementById('ep').value;
  const b = document.getElementById('led').value;
  const c = document.getElementById('circuit').value;
  const ohm = 0.1 / ((a / c) / ((3 * b) + 1));
  document.getElementById('ohm').innerHTML = ohm;
}
