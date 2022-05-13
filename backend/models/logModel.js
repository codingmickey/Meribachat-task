import mongoose from 'mongoose';

const logSchema = mongoose.Schema(
  {
    activity: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Log = mongoose.model('Log', logSchema);

export default Log;
