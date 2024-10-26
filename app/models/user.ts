import { Model, model, models, ObjectId, Schema } from "mongoose";
import { hashSync, compareSync, genSaltSync } from "bcryptjs";

interface BaseUserDoc {
  _id?: ObjectId;
  name: string;
  email: string;
  provider: "credentials" | "google";
  password?: string;
  avatar?: {
    id?: string;
    url: string;
  };
  verified: boolean;
}

export interface CredentialsUserDoc extends BaseUserDoc {
  provider: "credentials";
  password: string;
}

export interface GoogleUserDoc extends BaseUserDoc {
  provider: "google";
  password?: never;
}

export type UserDoc = CredentialsUserDoc | GoogleUserDoc;

interface Methods {
  compare(password: string): boolean;
}

const schema = new Schema<BaseUserDoc, {}, Methods>(
  {
    email: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    password: String,
    avatar: {
      type: Object,
      url: String,
      id: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    provider: {
      type: String,
      enum: ["google", "credentials"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

schema.pre("save", function () {
  if (
    this.isModified("password") &&
    this.password &&
    this.provider === "credentials"
  ) {
    const salt = genSaltSync(10);
    this.password = hashSync(this.password, salt);
  }
});

schema.methods.compare = function (password: string): boolean {
  return this.password ? compareSync(password, this.password) : false;
};

export const createNewUser = async (userInfo: UserDoc) => {
  try {
    return await UserModel.create(userInfo);
  } catch (error) {
    console.error("Error creating user:", (error as Error).message);
    throw new Error("Failed to create user");
  }
};

const UserModel = models.User || model<BaseUserDoc, Model<BaseUserDoc, {}, Methods>>("User", schema);
export default UserModel;

