/** Fisher–Yates with a numeric seed. The same seed always returns the same order. */
export function shuffleChoices<T>(items: readonly T[], seed: number): T[] {
  const out = items.slice();
  let state = seed >>> 0 || 1;
  const next = () => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    return state / 4294967296;
  };
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    const swap = out[i];
    out[i] = out[j];
    out[j] = swap;
  }
  return out;
}
