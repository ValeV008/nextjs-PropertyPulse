import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User", // reference User model
      required: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "User", // reference User model
      required: true,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property", // reference Property model
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: String,
    body: String,
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Message = models.Message || model("Message", MessageSchema);

export default Message;
