import mongoose from 'mongoose'

const scoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    closenessScore: {
      type: String,
      required: true
    },
    conflictsScore: {
      type: String,
      required: true,
    }
    // createdAt, updatedAt => Member since <createdAt>
  },
  { timestamps: true }
)

const Score = mongoose.model('Score', scoreSchema)

export default Score
