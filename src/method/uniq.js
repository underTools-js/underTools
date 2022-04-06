const uniq = (arr) => {
  const el = [...arr].reduce(
    (accumulator, value) => (accumulator.includes(value) ? accumulator : accumulator.concat(value)),
    [],
  );
  return el;
};

export default uniq;
