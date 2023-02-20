//callback asynchronous
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



//promise
let janjian = new Promise((resolve, reject)=> {
    let success = false
    if (success) {
        resolve('berhasil')
    } else {
        reject(new Error('janji dibatalkan'))
    }
})

//promise (then catch)
janjian
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

// async/await
async function hellowWorld() {
    let result = await doAsync()
    console.log(result)
}