const { Schema, model } = require("mongoose");
const moment = require("moment");
const reactionSchema = require("./Reactions");

const thoughtSchema = new Schema(
  {
    reactions: [reactionSchema],
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 258,
    },
    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      // Set default value to the current timestamp
      default: Date.now,
      // Use a getter method to format the timestamp on query
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// get total count of reactions and replies on retrieval
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
