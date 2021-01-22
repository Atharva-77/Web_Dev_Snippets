const mongoose=require('mongoose')

const ExerciseSchema = new mongoose.Schema(
{
    userName:
    {
        type:String,
        required: true,
    },

    description:
    {
        type:String,
        required: true,
    },

    duration:
    {
        type: Number,
        required: true,
    },
    date:
    {
        type: Date,
        required: true,
    },

},

{
    timestamps: true,
}
);
   

                            //Model name, schema
module.exports = mongoose.model('Exercise',ExerciseSchema)