
import { mongoose } from 'mongoose'
const Schema = mongoose.Schema

const TemplatesSchema = new Schema({
  a_string: String,
  a_date: Date,
})

// Export function to create "SomeModel" model class
export const Templates = mongoose.model("Templates", TemplatesSchema)
