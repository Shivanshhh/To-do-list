const mongoose=require('mongoose');

const listSchema= new mongoose.Schema({
    text:{
        type: String,
        required: [true],
        trim: true,
}
});

const List=mongoose.model('List', listSchema);
module.exports= List;