const mongoose = require('mongoose')


const caseSchema = new mongoose.Schema({
    case_id: {
        type:String,
        required:[true,"can't be blank"],
        trim: true
    },
    status:{
        type: String,
        enum: ['closed','active']
    },
    
    judge_id: {
        type:String,
        required: false,
        default: null,
        trim: true
    },
    
    lawyer_id:{
        type: Array,
        
        required:true
    },
    last_active:{
        type: Date,
        required:false
    }
},
{timestamps:true})

const caseModel =  mongoose.model('case',caseSchema);

module.exports = caseModel;