const model = require('../model/pegawaiModel.js')

let controller = {}

controller.getAllPegawai = async (req, res) => {
    try {
        const result = await model.getAllPegawai()
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

controller.getPegawaiByNip = async (req, res) => {
    try {
        const nip = req.params.nip
        const result = await model.getPegawaiByNip(nip)
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

controller.postPegawai = async (req, res) => {
    try {
        // let data = req.body

        let data = {
            nip : req.body.nip,
            nama_pegawai : req.body.nama_pegawai,
            alamat : req.body.alamat,
            tempat_lahir : req.body.tempat_lahir,
            tanggal_lahir : req.body.tanggal_lahir,
            gender : req.body.gender,
            usia : req.body.usia,
            created_at : new Date() 
        }

        data.created_at = new Date() 
        const result = await model.postPegawai(data)
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

controller.updatePegawai = async (req, res) => {
    try {
        let data = {
            nip : req.body.nip,
            nama_pegawai : req.body.nama_pegawai,
            alamat : req.body.alamat,
            tempat_lahir : req.body.tempat_lahir,
            tanggal_lahir : req.body.tanggal_lahir,
            gender : req.body.gender,
            usia : req.body.usia,
            updated_at : new Date() 
        }

        let nip = req.params.nip

        data.created_at = new Date() 
        const result = await model.updatePegawai(data, nip)
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

module.exports = controller