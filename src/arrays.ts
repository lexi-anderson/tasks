/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        return [...numbers, ...numbers];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((value: number): number => value * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((value: string): number =>
        isNaN(parseInt(value)) ? 0 : parseInt(value)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newAmounts = amounts.map((value: string): string =>
        value.charAt(0) === "$" ? value.substring(1) : value
    );
    return newAmounts.map((value: string): number =>
        isNaN(parseInt(value)) ? 0 : parseInt(value)
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMessages = messages.filter(
        (value: string): boolean => !value.includes("?")
    );
    return newMessages.map((value: string): string =>
        value.slice(-1) === "!" ? value.toUpperCase() : value
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((value: string): boolean => value.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) return true;
    const newColors = colors.filter(
        (value: string): boolean =>
            value === "red" || value === "green" || value === "blue"
    );
    if (newColors.length !== colors.length) return false;
    else return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return sum.toString() + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const anyNegs = values.some((value: number): boolean => value < 0);
    if (!anyNegs) {
        const noNegsSum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return [...values, noNegsSum];
    } else {
        const negIndex = values.findIndex(
            (value: number): boolean => value < 0
        );
        const beforeNeg = [...values].slice(0, negIndex);
        const afterNeg = [...values].slice(negIndex + 1);
        const beforeNegSum = beforeNeg.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return [...beforeNeg, values[negIndex], beforeNegSum, ...afterNeg];
    }
}