const router = require('express').Router();
const { getAll, getById, createCollection } = require('../services/collection');

router.get('/', async (req, res) => {
    // console.log('Try get!');
    const data = await getAll();
    res.json(data);
});

router.post('/', async (req, res) => {

    const data = {
        title: req.body.title,
        collectionImage: req.body.collectionImage,
        description: req.body.description,
        author: req.user._id,
    }

    const result = await createCollection(data);

    res.status(201).json(result);
});

module.exports = router;
