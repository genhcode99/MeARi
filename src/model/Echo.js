import mongoose from "mongoose";

const echoSchema = new mongoose.Schema({
  title : {type: String, required: true},

  course : {type: mongoose.Schema.Types.ObjectId, ref:"Course"},

  meari : [{type: mongoose.Schema.Types.ObjectId, ref:"Meari"}],

  createdAt :{ type: Date, required: true, default:Date.now } 

});

const Echo = mongoose.model("Echo", echoSchema);

export default Echo;