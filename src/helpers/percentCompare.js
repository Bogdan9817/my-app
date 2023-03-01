export default function percentCompare(basicVal, compareVal) {
  const minVal = +basicVal * 0.9;
  const maxVal = +basicVal * 1.1;
  return minVal <= +compareVal && maxVal >= +compareVal;
}
