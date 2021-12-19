import mongoose, { Schema } from 'mongoose';
const productoSchema = new Schema({
  categoria: { type: Schema.Types.ObjectId, ref: 'categoria' },
  nombre: { type: String, maxlength: 50, unique: true, required: true },
  precio: { type: String, maxlength: 5, required: true },
  descripcion: { type: String, maxlength: 255 },
  created_at: { type: Date, default: Date.now }
});
const productoModel = mongoose.model('producto', productoSchema);
export default productoModel;
