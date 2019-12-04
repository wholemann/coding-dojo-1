const getOriginalMap = (n, arr1, arr2) => {
  return arr1
    .map((v, i) => (v | arr2[i]).toString(2).padStart(n, '0'))
    .map(convertSpecialCharacter);
}

const convertSpecialCharacter = (str) => {
  return str.replace(/1/g, '#').replace(/0/g, ' ');
};

test('getOriginalMap', () => {
  expect(getOriginalMap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual([
    '#####',
    '# # #', 
    '### #', 
    '#  ##', 
    '#####',
  ]);
});
