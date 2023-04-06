
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/dangki');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const dangki = new Schema({
    username: String,
    pasword: Number,
    paswordagain: Number
}, { collection: 'dangki' });
const accountModel = mongoose.model('dangki', dangki)
// for (let i = 0; i < 10; i++) {
//     accountModel.create({
//         username: "son" + i,
//         age: 18
//     })
// }
// accountModel.find({}).then(function (data) {
//     console.log('data', data)
// }).catch(function (err) { console.log('loi', err) })
// accountModel.create({
//     username: "ha",
//     pasword: 27,
//     paswordagain: 27
// })
const mongoModel = mongoose.model('dangki', dangki)
module.exports = mongoModel