

const Document = require("../models/Document");

exports.uploadDocument = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const doc = new Document({
      originalName: file.originalname,
      fileName: file.filename,
      fileType: file.mimetype,
      size: file.size,
      owner: req.user.id,
      tags: req.body.tags ? req.body.tags.split(",") : [],
    });

    await doc.save();

    res.status(201).json({ message: "Document uploaded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
};

exports.getMyDocuments = async (req, res) => {
  try {
    const docs = await Document.find({ owner: req.user.id })
      .sort({ createdAt: -1 });

    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch documents" });
  }
};

const fs = require("fs");
const path = require("path");

exports.deleteDocument = async (req, res) => {
  try {
    const doc = await Document.findOne({
      _id: req.params.id,
      owner: req.user.id,
    });

    if (!doc) {
      return res.status(404).json({ message: "Document not found" });
    }

    // delete file from disk
    const filePath = path.join(__dirname, "../../uploads", doc.fileName);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await doc.deleteOne();
    res.json({ message: "Document deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};
