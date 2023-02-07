//spread operator
var brand = ['honda', 'bmw', 'toyota', 'subaru']
var otherBrand = [...brand, brand[2] ]
var allBrand = [...brand, ...otherBrand]

console.log(brand);
console.log(otherBrand);
console.log(allBrand);
