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

model.getEmployeeByNik = (nik) => {
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
                nik,
                employee_name,
                tempat_lahir,
                tanggal_lahir,
                alamat,
                departement,
                jabatan,
                tanggal_bergabung,
                tanggal_akhir_kontrak,
                status,
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
                data.employee_name,
                data.tempat_lahir,
                data.tanggal_lahir,
                data.alamat,
                data.departement,
                data.jabatan,
                data.tanggal_bergabung,
                data.tanggal_akhir_kontrak,
                data.status,
                data.created_at,
                data.created_by,
                data.updated_at,
                data.updated_by
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
                employee_name= $1,
                tempat_lahir= $2,
                tanggal_lahir= $3,
                alamat= $4,
                departement= $5,
                jabatan= $6,
                tanggal_bergabung= $7,
                tanggal_akhir_kontrak= $8,
                status= $9,
                created_at= $10,
                created_by= $11,
                updated_at= $12,
                updated_by= $13
            WHERE nik = $14                 
            RETURNING *`,
            [
                data.employee_name,
                data.tempat_lahir,
                data.tanggal_lahir,
                data.alamat,
                data.departement,
                data.jabatan,
                data.tanggal_bergabung,
                data.tanggal_akhir_kontrak,
                data.status,
                data.created_at,
                data.created_by,
                data.updated_at,
                data.created_by,
                data.nik,
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