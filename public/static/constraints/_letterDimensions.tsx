interface LetterDimension {
  width: number;
  height: number;
}

interface LetterDimensions {
  [letter: string]: LetterDimension;
}

const letterDimensions: LetterDimensions = {
  A: {
    width: 100,
    height: 98,
  },
  B: {
    width: 79,
    height: 98,
  },
  C: {
    width: 91,
    height: 101,
  },
  D: {
    width: 87,
    height: 98,
  },
  E: {
    width: 71,
    height: 98,
  },
  F: {
    width: 68,
    height: 98,
  },
  G: {
    width: 92,
    height: 101,
  },
  H: {
    width: 87,
    height: 98,
  },
  I: {
    width: 26,
    height: 98,
  },
  J: {
    width: 71,
    height: 100,
  },
  K: {
    width: 88,
    height: 98,
  },
  L: {
    width: 65,
    height: 98,
  },
  M: {
    width: 111,
    height: 96,
  },
  N: {
    width: 83,
    height: 96,
  },
  O: {
    width: 96,
    height: 99,
  },
  P: {
    width: 77,
    height: 96,
  },
  Q: {
    width: 94,
    height: 106,
  },
  R: {
    width: 82,
    height: 96,
  },
  S: {
    width: 80,
    height: 101,
  },
  T: {
    width: 84,
    height: 98,
  },
  U: {
    width: 84,
    height: 100,
  },
  V: {
    width: 100,
    height: 98,
  },
  W: {
    width: 141,
    height: 98,
  },
  X: {
    width: 94,
    height: 98,
  },
  Y: {
    width: 98,
    height: 98,
  },
  Z: {
    width: 81,
    height: 98,
  },
};

export default letterDimensions;
