function makeGreat(magicianNames: string[]): string[] {
    const greatMagicians: string[] = magicianNames.map(name => `Great ${name}`);
    return greatMagicians;
}
function showMagicians(magicianNames: string[]): void {
        magicianNames.forEach((value) =>console.log(`Magician: ${value}`)           
)
}

const originalMagicianNames: string[] = ["baba", "kaali", "jaaali"];
const greatMagicianNames: string[] = makeGreat([...originalMagicianNames]); 
console.log("Original Magicians:");
showMagicians(originalMagicianNames);
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);
