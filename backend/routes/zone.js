const express = require('express');
const router = express.Router();
const zoneModel = require('../models/zone');

router.get("/", (req, res) => zoneModel.getAll(res));
router.get("/:zoneId", (req, res) => zoneModel.getOne(req.params.zoneId, res));
router.post("/", (req, res) => zoneModel.create(req, res));
router.put("/:zoneId", (req, res) => zoneModel.update(req.params.zoneId, req.body, res));
router.delete("/:zoneId", (req, res) => zoneModel.delete(req.params.zoneId, res));

module.exports = router;