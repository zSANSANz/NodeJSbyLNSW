const db = require('../config/postgres')

let model = {}

model.getDokumen = () => {
    return new Promise((resolve, rejects) => {
        db.query(`SELECT 
                    nip as no_pegawai,
                    nama_pegawai,
                    tempat_lahir,
                    tanggal_lahir,
                    alamat
                FROM pegawai.profile`, (err, res) => {
            if(err) {
                rejects(err)
            } else {
                resolve(res.rows)
            }
        })
    })
}

module.exports = model 