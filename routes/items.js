require('dotenv').config();
var express = require('express');
var router = express.Router();
const Item = require("../models/Item");

/* GET comment list */
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    if(!items) throw Error('No items found');

    res.status(200).json(items);
  } catch(e) {
    res.status(400).json({msg: e.message});
  }
  
});

/*POST a comment */

router.post('/', async(req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  try {
    const item = await newItem.save();
    if(!item) throw Error("Something went wrong, item not saved");
    res.status(200).json(item);
  } catch(e) {
    res.status(400).json({msg: e.message});
  }
})

/* DELETE comment*/
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if(!item) throw Error('No item found');

    const removedItem = await item.remove();
    if(!removedItem) throw Error('Something went wrong, unable to delete item');

    res.status(200).json({success: true});
  } catch (e) {
    res.status(400).json({msg: e.message, success: false})
  }
})

module.exports = router;
