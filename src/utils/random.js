

export default function random (min = 0, max) {
  [min, max] = !max || !parseInt(max)
    ? [0, min]
    : [min, max];

  return Math.floor(Math.random() * (max - min + 1) + min);
}

