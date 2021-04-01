const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true, default: "https://uploads-ssl.webflow.com/5b51027ab42492b481d39425/5ba289e09f24ea6d65fc8a70_noimage.jpg" },
    category: { type: String, enum: ["Entrées", "Plats", "Desserts", "Boissons", "Menus"], default: "Plats" },
    ingredients: [{ type: String, required: true }],
    isVegan: { type: Boolean, required: true, default: false },
    price: { type: Number, min: 0.5 },
    menu:[{ type: Schema.Types.ObjectId, ref: 'Product' }]
},
    { timestamps: true }
);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;