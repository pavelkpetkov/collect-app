const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: { type: String, required: [true, 'Title is required'] },
    collectionImage: { type: String, required: true },
    description: { type: String, required: [true, 'Description is required'] },
    author: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model("Collection", schema);
