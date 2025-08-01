/**
 * For two strings s and t, we say "t divides s" if and only if s = t + t + ... + t (i.e., t is concatenated with itself one or more times).
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 */

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    const length = gcd(str1.length, str2.length);
    return str1.substring(0, length);
}

// Example usage:
console.log(gcdOfStrings("ABCABC", "ABC"));

/*
Time Complexity: O(n + m), where n = str1.length and m = str2.length.
Space Complexity: O(n + m), due to temporary concatenated strings.
*/