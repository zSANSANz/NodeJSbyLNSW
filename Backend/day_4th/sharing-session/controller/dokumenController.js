const model = require('../model/dokumenModel.js')
const axios = require('axios')

let controller = {}

controller.getDokumen = async (req, res) => {
    try {
        const result = await model.getDokumen()
        const payloadJasper = {
            data: {
                daftarPegawai: result
            }
        }
        let cetakan
        await axios({
            method: 'put',
            url: 'http://10.239.9.9:8530/jasperserver/rest_v2/resources/LNSW/Latihan_Jasper/list_pegawai.json',
            data: payloadJasper,
            auth: {
                username: 'insw@nella_kharisma',
                password: 'nella_kharisma'
            }
        }).then(async(response) => {
            await axios({
                method:'get',
                url: 'http://10.239.9.9:8530/jasperserver/rest_v2/reports/LNSW/Latihan_Jasper/Latihan1.pdf',
                responseType: 'stream',
                auth: {
                    username: 'insw@nella_kharisma',
                    password: 'nella_kharisma'
                }
            }).then((result) => {
                res.writeHead(200, {'Content-Type': 'application/pdf'})
                cetakan = result.data.pipe(res)
            })
        }).catch((err) => {
            console.log(err)
            return new Error(err)
        })
        // res.status(200).json({
        //     code: 200, 
        //     message: 'Success',
        //     data: result,
        // })
        return cetakan
    } catch (error) {
        console.log(error)
        res.status(400).json({
            code: 400, 
            message: 'Error',
            data: error,
        })
    }
}

module.exports = controller