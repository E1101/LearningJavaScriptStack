/**
 * @param {*[]} comboOptions - original set that we will take elements from.
 * @param {number} comboLength - the length of combinations we're going to make.
 * @return {*[]}
 */
export default function combineWithRepetitions(comboOptions, comboLength) {
  // If the length of combinations is 1 then each element of original set is a combination.
  if (comboLength === 1) {
    return comboOptions.map(comboOption => [comboOption]);
  }

  // Init combinations array.
  const combos = [];

  // Go through every character of original set and concatenate it to combinations
  // of smaller size.
  comboOptions.forEach((currentOption, optionIndex) => {
    // Get all smaller combinations WITH the current element from original set.
    const smallerCombos = combineWithRepetitions(
      comboOptions.slice(optionIndex),
      comboLength - 1,
    );

    // Concatenate current element (option) to all smaller combinations.
    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption].concat(smallerCombo));
    });
  });

  // Return all combinations.
  return combos;
}
