/**
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
 * If a string is longer than the other, append the additional letters onto the end of the merged string.
 * Return the merged string.
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr"
 */

function mergeAlternately(word1, word2) {
    let result = "";
    let l = Math.max(word1.length, word2.length);
    for (let i = 0; i < l; i++) {
        if (i < word1.length) {
            result += word1[i];
        }
        if (i < word2.length) {
            result += word2[i];
        }
    }
    return result;
}

// Example usage:
console.log(mergeAlternately("abc", "pqr"));

/*
Time Complexity: O(n + m), where n = word1.length and m = word2.length
Space Complexity: O(n + m), for the result string containing all characters from both inputs
*/