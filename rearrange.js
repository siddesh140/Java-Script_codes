const array = [3, 1, -2, -5, 2, -4, 6, 8, -7, -9];
function rearrangeBySign(nums) {
  // Separate positive and negative numbers
  const positives = nums.filter(num => num > 0);
  const negatives = nums.filter(num => num < 0);

  // Interleave positives and negatives
  const rearranged = [];
  for (let i = 0; i < Math.min(positives.length, negatives.length); i++) {
    rearranged.push(positives[i]);
    rearranged.push(negatives[i]);
  }

  // Add any remaining elements from either array
  rearranged.push(...positives.slice(i));
  rearranged.push(...negatives.slice(i));

  return rearranged;
}

// Example usage
const result = rearrangeBySign(array);
console.log("Rearranged array:", result);