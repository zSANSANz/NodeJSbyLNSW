
//if else
// if (nilai >= 70) {
//     console.log('nilai anda memenuhi KKM')
// } else {
//     console.log('maaf , anda tidak lulus');
// }

// switch(nilai) {
//     case nilai >= 7:
//         console.log('nilai anda memenuhi KKM << dari switch-case')
//     break;
//     default:
//         console.log('maaf, anda tidak lulus << dari switch-case')
// }

const nilai = 70

if (nilai <= 7) {
    console.log('nilai anda memenuhi KKM << dari if-else');
} else if (typeof(nilai) == 'number') {
    console.log('nilai tidak valid << dari if-else');
} else {
    console.log('maaf , anda tidak lulus << dari if-else');
}

switch(true) {
    case nilai <= 7:
        console.log('nilai anda memenuhi KKM << dari switch-case');
    break;
    case typeof(nilai) == 'number':
        console.log('nilai tidak valid << dari switch-case');
    break;
    default:
        console.log('maaf, anda tidak lulus << dari switch-case');
}

let hasil = nilai >= 7 ? console.log('nilai anda memenuhi kkm << dari ternary')
    : typeof(nilai) == 'number' ? console.log('nilai tidak valid << dari ternary')
    : console.log('maaf, anda tidak lulus << dari ternary');
