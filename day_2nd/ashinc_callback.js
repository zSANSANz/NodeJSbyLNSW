const getmonth = (callback) => {
    setTimeout (() => {
        let error = true;
        let month = ['Januari', 'February', 'March', 'April', 'May', 'June'];
        if (!error) {
            callback(null, month);
        } else {
            callback(new Error('Sorry Data Not Found'), []);
        }
    }, 4000);
}

showMonth = (n, m) => {
    if (n === null) {
        m.map(x => console.log(x))
    } else {
        console.log(n);
        if(m === undefined) {
            console.log(`[]`)
        }
    }
}

getmonth(showMonth)