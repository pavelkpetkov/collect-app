const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: { type: String, required: [true, 'Title is required'], minLength: [3, 'Title has to be at least 3 characters long'] },
    collectionImage: { type: String, required: [true, 'Image is required'] },
    description: { type: String, required: [true, 'Description is required'], minLength: [10, 'Description has to be at least 10 characters long'] },
    author: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model("Collection", schema);
