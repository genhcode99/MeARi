import mongoose from "mongoose";

const meariSchema = new mongoose.Schema({
  echo : {type: mongoose.Schema.Types.ObjectId, ref:"Echo"},

  koText : {type: String, required: true},

  koVoiceUrl : {type: String, required: true},

  enText : {type: String, required: true},

  enVoiceUrl : {type: String, required: true}
});

const Meari = mongoose.model("Meari", meariSchema);

export default Meari;