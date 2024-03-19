const txt = ["Ideate", "Ignite", "Innovate"];

// These are increment and decrement counters
let i = 0,
j = 0;

// This is for checking if all the characters of the word have been typed
let end = false;

// This will be the waiting function, to give delay after typing
function wait(seconds) {
return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

// The main function to type and backspace multiple words
async function main() {
// Check if the value of i is less than array length of txt containing all the words
if (i < txt.length) {
// This is for the auto typing
if (end == false && j <= txt[i].length) {
document.getElementById("typed").innerHTML += txt[i][j];
j++;
}

// This is for backspacing the characters one by one
if (end == true && j <= txt[i].length) {
document.getElementById("typed").innerHTML = txt[i].substring(0, j - 1);
j--;
}

// This is for checking if all the characters have been typed
if (j == txt[i].length) {
end = true;
await wait(2);
}

// This is for going to the next word
if (end == true && j == 0) {
i++;
end = false;
}
}
// If the value of i becomes greater than or equal to the array length, reset i to 0
else i = 0;

setTimeout(main, 200);
}
main();
