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

controller.getEmployeeByNip = async (req, res) => {
    try {
        const nip = req.params.nip
        const result = await model.getEmployeeByNip(nip)
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
        // let data = req.body

        let data = {
            nip : req.body.nip,
            nama_employee : req.body.nama_employee,
            alamat : req.body.alamat,
            tempat_lahir : req.body.tempat_lahir,
            tanggal_lahir : req.body.tanggal_lahir,
            gender : req.body.gender,
            usia : req.body.usia,
            created_at : new Date() 
        }

        data.created_at = new Date() 
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
            nip : req.body.nip,
            nama_employee : req.body.nama_employee,
            alamat : req.body.alamat,
            tempat_lahir : req.body.tempat_lahir,
            tanggal_lahir : req.body.tanggal_lahir,
            gender : req.body.gender,
            usia : req.body.usia,
            updated_at : new Date() 
        }

        let nip = req.params.nip

        data.created_at = new Date() 
        const result = await model.updateEmployee(data, nip)
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
        
        let nip = req.params.nip

        const result = await model.deleteEmployee(nip)
        res.status(200).json({
            code: 200, 
            message: 'Success',
            data: `Berhasil menghapus data dengan nip = ${nip}`,
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