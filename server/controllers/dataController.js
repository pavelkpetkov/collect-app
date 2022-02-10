const router = require('express').Router();
const { isAuth, isOwner } = require('../middlewares/guards');
const { getAll, createCollection, updateCollection, deleteCollection } = require('../services/collection');
const preload = require('../middlewares/preload');

router.get('/', async (req, res) => {
    const data = await getAll();
    res.json(data);
});

router.post('/create', isAuth(), async (req, res) => {

    const data = {
        title: req.body.title,
        collectionImages: req.body.collectionImages,
        description: req.body.description,
        author: req.user._id,
    }

    try {
        const result = await createCollection(data);
        res.status(201).json(result);
    } catch(err) {
        res.status(err.status || 400).json({ message: err.message });
    }   

});

router.get('/details/:id', preload(), async (req, res) => {

    const item = req.data.toObject();
    item._ownerId = item.author.toString();
    res.json(item);
});

router.put('/edit/:id', isAuth(), preload(), isOwner(), async (req, res) => {

    const updated = {
        title: req.body.title,
        collectionImages: req.body.collectionImages,
        description: req.body.description,
    }

    try {
        const result = await updateCollection(req.data, updated);
        res.json(result);
    } catch(err) {
        res.status(err.status || 400).json({ message: err.message });
    } 

});

router.delete('/:id', isAuth(), preload(), isOwner(), async (req, res) => {

    try {
        await deleteCollection(req.params.id);
        res.status(204).end();
    } catch(err) {
        res.status(err.status || 400).json({ message: err.message });
    } 

});


module.exports = router;
