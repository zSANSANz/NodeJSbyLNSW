for (i = 1; i < 10; i=i+2) {
    console.log('ini pengulangan for ke-' + i);
}

let j = 1;
do {
    console.log('ini pengulangan do ke-' + j);
    j+=1;
} while (i<10)

let k = 10;
while(k<10) {
    if (k%2 != 0) {
        console.log(k+ ' merupakan bilangan ganjil')
    } else {
        console.log(k+ ' merupakan bilangan genap')
    }
    i++;
}