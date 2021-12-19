import mongoose, { Schema } from 'mongoose';
const categoriaSchema = new Schema({
  nombre: { type: String, maxlength: 50, unique: true, required: true },
  descripcion: { type: String, maxlength: 255, required: true },
  created_at: { type: Date, default: Date.now }
});
const categoriaModel = mongoose.model('categoria', categoriaSchema);
export default categoriaModel;
