const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      unique: true,
      trim: true,
      required: "Text is required",
    },

    createdAt: {
      type: Date,
      get: (date) => timeSince(date),
    },

    updatedAt: {
        type: Date,
        get: (date) => timeSince(date),
},

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
        required: "Text is required",
      },
    ],
},

    {
        username: {
          type: String,
          unique: true,
          trim: true,
          required: "Username is Required",
        },

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("thought").get(function () {
  return this.friends.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;