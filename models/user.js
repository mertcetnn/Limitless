const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  usurname: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  toJSON: {
    virtuals: Boolean,
  },
  id: Boolean,
});

// get total count of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create the Users model using the Users Schema
const Users = model("Users", userSchema);

// Export Users module
module.exports = Users;
