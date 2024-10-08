const mongoose = require("mongoose");

const ProblemsSchema = new mongoose.Schema({

    problemName : {
        type : String,
        required: true,
    },

    problemStatement : {
        type : String,
        required : true,
    },

    constraints : {
        type : [String],
        required : true,
    }, 

    code : {
       type : String,
       required : true,     
    },

    tag : {
       type : String,
       required : true, 
    },
    testCases : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Testcases",
    }],
    
    solutionsSubmittedByCoder : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "SolutionsSubmittedByUser",
    }],

    problemCreater : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    }
});

module.exports = mongoose.model("Problems",ProblemsSchema);