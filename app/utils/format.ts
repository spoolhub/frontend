/**
 * Formats a number into an abbreviated string (e.g., 1200 -> 1.2k, -1500 -> -1.5k).
 *
 * @param {number} num - The number to be formatted.
 * @param {number} [fixed=1] - The number of decimal places to retain after formatting.
 * @returns {string} The formatted number string.
 */
export function abbreviateNumber(num, fixed = 1) {
  // 1. Check for invalid or zero input
  if (typeof num !== 'number' || isNaN(num)) {
    return '0';
  }
  if (num === 0) {
    return '0';
  }

  // 2. Handle the sign (negative or positive)
  const sign = num < 0 ? '-' : '';
  const absNum = Math.abs(num); // Use the absolute value for formatting logic

  // List of suffixes (ordered from largest to smallest)
  const suffixes = [
    { value: 1e18, symbol: 'E' },
    { value: 1e15, symbol: 'P' },
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'B' }, // Billion
    { value: 1e6, symbol: 'M' }, // Million
    { value: 1e3, symbol: 'k' }, // Thousand
  ];

  // 3. Iterate through the suffixes using absNum
  for (let i = 0; i < suffixes.length; i++) {
    const item = suffixes[i];

    // Check absNum against the suffix value
    if (absNum >= item.value) {
      const newValue = absNum / item.value;

      // Prepend the sign and append the suffix
      return (
        sign +
        newValue
          .toFixed(fixed) // Keep the specified number of decimal places
          .replace(/\.0+$/, '') + // Remove .0, .00, etc., at the end if present
        item.symbol
      );
    }
  }

  // 4. Return the original absolute number as a string, prepended with the sign
  return sign + absNum.toString();
}
