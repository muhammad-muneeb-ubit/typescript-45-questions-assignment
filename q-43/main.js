function makeGreat(magicianNames) {
    const greatMagicians = magicianNames.map(name => `Great ${name}`);
    return greatMagicians;
}
function showMagicians(magicianNames) {
    magicianNames.forEach((value) => console.log(`Magician: ${value}`));
}
const originalMagicianNames = ["baba", "kaali", "jaaali"];
const greatMagicianNames = makeGreat([...originalMagicianNames]);
console.log("Original Magicians:");
showMagicians(originalMagicianNames);
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);
export {};
