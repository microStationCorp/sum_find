function longestSubstring(s: string) {
  let len = s.length;
  let longestSubstringLength = 0;
  let characterMap: { [index: string]: number } = {};
  let i = 0;

  for (let j = 0; j < len; j++) {
    if (s[j] in characterMap) {
      i = Math.max(characterMap[s[j]], i);
    }
    longestSubstringLength = Math.max(longestSubstringLength, j - i + 1);
    characterMap[s[j]] = j + 1;
  }
  let min: number = len + 1;
  Object.values(characterMap).forEach((value) => {
    if (min > value) min = value;
  });
  console.log(
    "length:",
    longestSubstringLength,
    "substring:",
    s.slice(min - 1, min + longestSubstringLength - 1)
  );
}

longestSubstring("abcdaefgsac");
