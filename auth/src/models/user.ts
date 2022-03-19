import mongoose from "mongoose";

//an interface that descript what properties are required'=
//when creating a new user
interface UserAttrs {
	email: string,
	password: string
}

//an interface that descript properties that a user model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc
}

//interface that descript properties that a user Doc has
interface UserDoc extends mongoose.Document {
	email: string,
	password: string
}

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
        required: true
	}
})

userSchema.statics.build = (attrs: UserAttrs) => {
	return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

const user = User.build({
	email: 'test@test.com',
	password: 'password',
})

export {User}