export const compose = (...fns) => (input) =>
  fns.reduceRight((acc, curr) => curr(acc), input);
