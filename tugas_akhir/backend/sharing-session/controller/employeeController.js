const model = require('../model/employeeModel.js')

let controller = {}

controller.getAllEmployee = async (req, res) => {
    try {
        const result = await model.getAllEmployee()
        res.status(200).json({
            code: 200, 
            message: 'Success',
            data: result,
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            code: 200, 
            message: 'Error',
            data: error,
        })
    }
}

controller.getEmployeeByNik = async (req, res) => {
    try {
        const nik = req.params.nik
        const result = await model.getEmployeeByNik(nik)
        res.status(200).json({
            code: 200, 
            message: 'Success',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            code: 200, 
            message: 'Error',
            data: error,
        })
    }
}

controller.postEmployee = async (req, res) => {
    try {
        let data = {
           nik: req.body.nik,
           namaEmployee: req.body.employee_name,
           alamat: req.body.alamat,
           tempatLahir: req.body.tempat_lahir,
           tanggalLahir: req.body.tanggal_lahir,
           gender: req.body.gender,
           usia: req.body.usia,
           createdAt: new Date(), 
           updatedAt: req.body.updated_at,
        }

        const result = await model.postEmployee(data)
        res.status(200).json({
            code: 200, 
            message: 'Success',
            data: result,
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            code: 200, 
            message: 'Error',
            data: error,
        })
    }
}

controller.updateEmployee = async (req, res) => {
    try {
        let data = {
            nik : req.body.nik,
            nama_employee : req.body.nama_employee,
            alamat : req.body.alamat,
            tempat_lahir : req.body.tempat_lahir,
            tanggal_lahir : req.body.tanggal_lahir,
            gender : req.body.gender,
            usia : req.body.usia,
            updated_at : new Date() 
        }

        let nik = req.params.nik

        data.created_at = new Date() 
        const result = await model.updateEmployee(data, nik)
        res.status(200).json({
            code: 200, 
            message: 'Success',
            data: result,
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            code: 200, 
            message: 'Error',
            data: error,
        })
    }
}

controller.deleteEmployee = async (req, res) => {
    try {
        
        let nik = req.params.nik

        const result = await model.deleteEmployee(nik)
        res.status(200).json({
            code: 200, 
            message: 'Success',
            data: `Berhasil menghapus data dengan nik = ${nik}`,
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            code: 200, 
            message: 'Error',
            data: error,
        })
    }
}

module.exports = controller