const Collection = require('../models/Collection');

async function getAll() {
    const collections = await Collection.find({}).lean();
    return collections;
}

async function getById(id) {
    const collection = await Collection.findById(id).lean();
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


module.exports = {
    getAll,
    getById,
    createCollection,
    deleteCollection
}
