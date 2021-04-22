
export default function delay (ms = 1000) {
  if (!parseInt(ms)) {
    throw new Error('Expected ms to be a number');
  }

  return new Promise(resolve => setTimeout(resolve, ms));
}
