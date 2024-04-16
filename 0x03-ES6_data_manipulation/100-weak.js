export const weakMap = new WeakMap();
export const queryAPI = (endpoint) => {
  let called = 0;
  if (weakMap.has(endpoint)) called = weakMap.get(endpoint);
  if (called === 4) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, called + 1);
};
