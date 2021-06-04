import mongoose from "mongoose";

const meariSchema = new mongoose.Schema({
  echo : {type: mongoose.Schema.Types.ObjectId, ref:"Echo"},

  koText : {type: String},

  koVoice : {type: String},

  enText : {type: String},

  enVoice : {type: String}
});

const Meari = mongoose.model("Meari", meariSchema);

export default Meari;