const notes = [12, 5, 17, 9, 20];
const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
const tri = [...notes].sort((a, b) => b - a);
const filtres = notes.filter(n => n >= 10);

console.log("Moyenne:", moyenne);
console.log("Tri décr:", tri);
console.log("Notes >= 10:", filtres);