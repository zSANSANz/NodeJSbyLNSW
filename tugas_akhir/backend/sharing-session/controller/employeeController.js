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
            employee_name: req.body.employee_name,
            tempat_lahir: req.body.tempat_lahir,
            tanggal_lahir: req.body.tanggal_lahir,
            alamat: req.body.alamat,
            departement: req.body.departement,
            jabatan: req.body.jabatan,
            tanggal_bergabung: req.body.tanggal_bergabung,
            tanggal_akhir_kontrak: req.body.tanggal_akhir_kontrak,
            status: req.body.status,
            created_at: req.body.created_at,
            created_by: req.body.created_by,
            updated_at: new Date(),
            updated_by: req.body.updated_by,
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
            nik: req.body.nik,
            employee_name: req.body.employee_name,
            tempat_lahir: req.body.tempat_lahir,
            tanggal_lahir: req.body.tanggal_lahir,
            alamat: req.body.alamat,
            departement: req.body.departement,
            jabatan: req.body.jabatan,
            tanggal_bergabung: req.body.tanggal_bergabung,
            tanggal_akhir_kontrak: req.body.tanggal_akhir_kontrak,
            status: req.body.status,
            created_at: req.body.created_at,
            created_by: req.body.created_by,
            updated_at: new Date(),
            updated_by: req.body.updated_by,
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