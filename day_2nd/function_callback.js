function sayHello(name, callback) {
    let greeting = `Hello ${name}`
    callback(greeting)
}

function showGreeting(quote) {
    console.log(quote)
}

sayHello('Hohn', showGreeting);