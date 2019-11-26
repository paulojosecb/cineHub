const multer = require('multer')
const uuidv4 = require('uuid/v4')

const path = require('path')

module.exports = {
  async upload (req, res) {
    let filename = uuidv4()
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, '././public')
      },
      filename: function (req, file, cb) {
        // req.body is empty... here is where req.body.new_file_name doesn't exists
        filename = `${filename}${path.extname(file.originalname)}`
        cb(null, filename)
      }
    })

    const upload = multer({ storage: storage }).single('file')

    upload(req, res, (err) => {
      if (err) {
        res.json({
          error: err
        })
      } else {
        res.json({
          filename: filename
        })
      }
    })
  }
}
