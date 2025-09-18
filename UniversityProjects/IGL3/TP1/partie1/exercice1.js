{
    var a = 1;
    let b = 2;
    const c = 3;
    console.log('Dans le bloc:', a, b, c);
}
// seulement var est accessible hors du bloc
console.log('Hors du bloc (var):', a);
console.log('Hors du bloc (let):', b); // Erreur
console.log('Hors du bloc (const):', c); // Erreur
c = 10; // Provoque une erreur : Assignment to constant variable.