const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    type: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    date: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    state: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        default: 'incompleted'
    },
    // with auth
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }

})

const List = mongoose.model('List', ListSchema);

module.exports = { List }