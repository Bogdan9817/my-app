export default function convertTo(from, to, value) {
  if (!!!from || !!!to || !!!value) {
    return;
  }
  if (from === to) {
    return +value;
  }
  if (from === "UAH") {
    const res = value / +this[to].sale;
    return res.toFixed(4);
  }
  if (to === "UAH") {
    const res = value * +this[from].buy;
    return res.toFixed(4);
  }
  const toUAH = value * +this[from].buy;
  const res = toUAH / +this[to].sale;
  return res.toFixed(4);
}
