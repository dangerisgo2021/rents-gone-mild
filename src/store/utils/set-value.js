export const setValue = ({ state, path, value }) => {
  const a = path.split(".");
  let o = state;
  while (a.length - 1) {
    let n = a.shift();
    if (!(n in o)) o[n] = {};
    o = o[n];
  }
  o[a[0]] = value;
};
