const router = require("express").Router();
const upload = require("../config/multer");
const auth = require("../middleware/auth.middleware");
const {
  uploadDocument,
  getMyDocuments,
} = require("../controllers/document.controller");
const { deleteDocument } = require("../controllers/document.controller");


router.post(
  "/upload",
  auth,
  upload.single("file"),
  uploadDocument
);

router.get(
  "/my",
  auth,
  getMyDocuments
);

router.delete(
  "/:id",
  auth,
  deleteDocument
);

module.exports = router;
