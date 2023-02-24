const db = require('../config/postgres')

let model = {}

model.getAllPegawai = () => {
    return new Promise((resolve, rejects) => {
        db.query(`SELECT * FROM pegawai.profile`, (err, res) => {
            if(err) {
                rejects(err)
            } else {
                resolve(res.rows)
            }
        })
    })
}

model.getPegawaiByNip = (nip) => {
    return new Promise((resolve, rejects) => {
        db.query(`SELECT * FROM pegawai.profile p WHERE p.nip = '${nip}'`, (err, res) => {
            if(err) {
                rejects(err)
            } else {
                resolve(res.rows)
            }
        })
    })
}

model.postPegawai = (data) => {
    return new Promise((resolve, rejects) => {
        console.log(data)
        db.query(`insert into pegawai.profile(
                nip,
                nama_pegawai,
                alamat,
                tempat_lahir,
                tanggal_lahir,
                gender,
                usia,
                created_at,
                updated_at,
                divisi_id
            ) values (
                $1, 
                $2, 
                $3, 
                $4, 
                $5, 
                $6, 
                $7, 
                $8, 
                $9, 
                $10
            ) RETURNING *`,
            [
                data.nip,
                data.nama_pegawai,
                data.alamat,
                data.tempat_lahir,
                data.tanggal_lahir,
                data.gender,
                data.usia,
                data.created_at,
                data.updated_at,
                data.divisi_id
            ],
        (err, res) => {
            if(err) {
                rejects(err)
            } else {
                resolve(res.rows)
            }
        })
    })
}

model.updatePegawai = (data, nip) => {
    return new Promise((resolve, rejects) => {
        console.log(data)
        db.query(`UPDATE pegawai.profile set 
                nama_pegawai = $1,
                alamat = $2,
                tempat_lahir = $3,
                tanggal_lahir = $4,
                gender = $5,
                usia = $6,
                updated_at = $7,
                divisi_id = $8
            WHERE nip = $9                 
            RETURNING *`,
            [
                data.nama_pegawai,
                data.alamat,
                data.tempat_lahir,
                data.tanggal_lahir,
                data.gender,
                data.usia,
                data.updated_at,
                data.divisi_id,
                nip
            ],
        (err, res) => {
            if(err) {
                rejects(err)
            } else {
                resolve(res.rows)
            }
        })
    })
}

model.deletePegawai = (nip) => {
    return new Promise((resolve, rejects) => {
        console.log(nip)
        db.query(`DELETE FROM pegawai.profile 
            WHERE nip = $1                 
            RETURNING *`,
            [
                nip
            ],
        (err, res) => {
            if(err) {
                rejects(err)
            } else {
                resolve(res.rows)
            }
        })
    })
}

console.log(model)


module.exports = model 