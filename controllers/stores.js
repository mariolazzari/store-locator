const Store = require("../models/Store");

const getStores = async (req, res, next) => {
  try {
    const stores = await Store.find();
    res.status(200).json({ success: true, count: stores.length, data: stores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error." });
  }
};

const addStore = async (req, res, next) => {
  try {
    const store = await Store.create(req.body);
    res.status(201).json({ success: true, data: store });
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      return res.status(400).json({ error: "Duplicate store id." });
    }

    res.status(500).json({ error: "Server error." });
  }
};

module.exports = { getStores, addStore };
