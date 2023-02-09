const db = require('../config/postgres')

let model = {}

model.getAllpPegawai = () => {
    return new Promise((resolve, rejects) => {
        db.query(`SELECT * FROM pegawai.profile`, (err, res) => {
            if(err) {
                rejects(err)
            } else {
                resolve(res)
            }
        })
    })
}

console.log(model)

module.exports = model 