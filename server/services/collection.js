const Collection = require('../models/Collection');

async function getAll() {
    const collections = await Collection.find({}).lean();
    return collections;
}

async function getById(id) {
    const collection = await Collection.findById(id);
    return collection;
}

async function createCollection(data) {
    const collection = new Collection(data);
    await collection.save();
    return collection;
}

async function deleteCollection(id) {
    return Collection.findByIdAndDelete(id);
}

async function updateCollection(original, updated) {
    Object.assign(original, updated);
    await original.save();
    return original;
}


module.exports = {
    getAll,
    getById,
    createCollection,
    updateCollection,
    deleteCollection
}
