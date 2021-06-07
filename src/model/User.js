import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = mongoose.Schema({
  email: {type : String, required: true, unique: true},

  avatarUrl : {type : String, default: "none"},

  username : {type : String, required: true, },

  password : {type : String},

  country : {type : String},

  complete : [{type: mongoose.Schema.Types.ObjectId, ref:"Echo"}],

  manager : { type: Boolean, default: false}

});

userSchema.pre("save", async function () {
  if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 5);
  }
});

userSchema.pre("save", async function () {
  if(this.isModified("code")){
    this.code = await bcrypt.hash(this.code, 5);
  }
});

const User = mongoose.model("User", userSchema);

export default User;