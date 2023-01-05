import mongoose from 'mongoose'

interface IUser extends mongoose.Document {
  name: string
  email: string,
  age: number,
}

const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: [true, 'Please provide a email for this user.'],
    maxlength: [60, 'Email cannot be more than 60 characters'],
  },
})

export default mongoose.models.User as mongoose.Model<IUser> || mongoose.model<IUser>('User', UserSchema)