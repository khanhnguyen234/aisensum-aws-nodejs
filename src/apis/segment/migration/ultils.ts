export function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

export function random100() {
  return Number(getRandomArbitrary(0, 100));
}
