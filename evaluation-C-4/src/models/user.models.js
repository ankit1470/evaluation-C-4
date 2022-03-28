
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    
 firstName:{type: 'string', required:true},
    lastName:{type: 'string', required:true},
    email : {type : String, required : true, unique:true},
    password : {type : String, required : true},
},{
    timestamps : true,
    versionKey : false,
})
userSchema.pre("save", function(next){
    const hash = bcrypt.hashSync(this.password, 5);
    this.password = hash;
    return next();
})
userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
const User = mongoose.model("user", userSchema)
module.exports = User;






