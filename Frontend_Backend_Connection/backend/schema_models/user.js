const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema(
{
    userName:
    {
        type:String,
        required: true,
        unique:true,
        minlength: 3
    },
},

{
    timestamps: true,
}
);
   

                            //Model name, schema
module.exports = mongoose.model('User',UserSchema)