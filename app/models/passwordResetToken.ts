import { CallbackError, Model, model, models, Schema } from "mongoose";
import { hashSync, compareSync, genSaltSync } from "bcryptjs";

interface PassResetTokenDoc {
  token: string;
  userId: string;
  expires: Date;
}

interface Methods {
  compare(token: string): boolean;
}

const schema = new Schema<PassResetTokenDoc, {}, Methods>({
  token: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  expires: {
    type: Date,
    default: () => new Date(Date.now() + 60 * 60 * 1000), // 1 hora desde la creación
  },
});

schema.pre("save", function (next) {
  if (this.isModified("token")) {
    try {
      const salt = genSaltSync(10);
      this.token = hashSync(this.token, salt);
    } catch (error) {
      return next(error as CallbackError);
    }
  }
  next();
});

schema.methods.compare = function (token: string): boolean {
  return compareSync(token, this.token);
};

const PassResetTokenModel = models.PassResetToken || model<PassResetTokenDoc, Model<PassResetTokenDoc, {}, Methods>>("PassResetToken", schema);

export default PassResetTokenModel;

