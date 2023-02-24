const db = require('../config/postgres')

let model = {}

model.getAllEmployee = () => {
    return new Promise((resolve, rejects) => {
        db.query(`SELECT * FROM kelompok_3.tb_employee`, (err, res) => {
            if(err) {
                rejects(err)
            } else {
                resolve(res.rows)
            }
        })
    })
}

model.getEmployeeByNip = (nik) => {
    return new Promise((resolve, rejects) => {
        db.query(`SELECT * FROM kelompok_3.tb_employee p WHERE p.nik = '${nik}'`, (err, res) => {
            if(err) {
                rejects(err)
            } else {
                resolve(res.rows)
            }
        })
    })
}

model.postEmployee = (data) => {
    return new Promise((resolve, rejects) => {
        console.log(data)
        db.query(`insert into kelompok_3.tb_employee(
                nik
                employee_name
                tempat_lahir
                tempat_lahir
                alamat
                departement
                jabatan
                tanggal_bergabung
                tanggal_akhir_kontrak
                status
                created_at,
                created_by,
                updated_at,
                updated_by
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
                $10,
                $11,
                $12,
                $13,
                $14
            ) RETURNING *`,
            [
                data.nik,
                data.nama_employee,
                data.alamat,
                data.tempat_lahir,
                data.tanggal_lahir,
                data.gender,
                data.usia,
                data.created_at,
                data.updated_at
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

model.updateEmployee = (data, nik) => {
    return new Promise((resolve, rejects) => {
        console.log(data)
        db.query(`UPDATE kelompok_3.tb_employee set 
                nama_employee = $1,
                alamat = $2,
                tempat_lahir = $3,
                tanggal_lahir = $4,
                gender = $5,
                usia = $6,
                updated_at = $7,
                divisi_id = $8
            WHERE nik = $9                 
            RETURNING *`,
            [
                data.nama_employee,
                data.alamat,
                data.tempat_lahir,
                data.tanggal_lahir,
                data.gender,
                data.usia,
                data.updated_at,
                data.divisi_id,
                nik
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

model.deleteEmployee = (nik) => {
    return new Promise((resolve, rejects) => {
        console.log(nik)
        db.query(`DELETE FROM kelompok_3.tb_employee 
            WHERE nik = $1                 
            RETURNING *`,
            [
                nik
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