import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  // timestamps : going to tell mongodb to record two important extra infos (time of creation and updating if the user)
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

// the model is User
export default User;