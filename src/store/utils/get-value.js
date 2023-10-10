export const getValue = ({ state, path }) => {
  path = path.replace(/\[(\w+)]/g, ".$1");
  path = path.replace(/^\./, "");
  const a = path.split(".");
  let o = state;
  while (a.length) {
    const n = a.shift();
    if (!(n in o)) return;
    o = o[n];
  }
  return o;
};
