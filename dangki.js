
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const accountModel = require('./module/mongo.js')
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/dangki', express.static(path.join(__dirname, '/img')))

app.get('/dangki', (req, res, next) => {
    const duongdanfile = path.join(__dirname, 'dangki.html')
    res.sendFile(duongdanfile)

    const username = req.body.username
    const pasword = req.body.pasword
    const paswordagain = req.body.paswordagain

    accountModel.findOne({
        username: username,

    }).then(data => {
        if (data) {
            res.json('user da ton tai')
        } else {
            if (pasword === paswordagain) {
                return accountModel.create({
                    username: username,
                    pasword: pasword,
                    paswordagain: paswordagain
                })
            } else {
                res.json('mat khau ko khop')
            }
        }

    }).then(data => {

        res.json('tao tai khoan thanh cong')

    }).catch(err => { res.status(500).json('tao tai khoan that bai') })
})



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})