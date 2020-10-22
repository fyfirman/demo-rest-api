const router = require('express').Router();
const mongoose = require('mongoose');
const MahasiswaSchema = require('./mahasiswa.schema');

const mahasiswaModel = mongoose.model("Mahasiswa", MahasiswaSchema);

router.get('/', (req, res) => {
  mahasiswaModel.find((error, mahasiswa) => {
    if (error !== null) {
      res.status(200).json({
        message: error.message,
      });
    } else {
      res.status(200).json(mahasiswa);
    }
  })
});

router.post('/', (req, res) => {
  mahasiswaModel.create(req.body, (error, mahasiswa) => {
    if (error !== null) {
      res.json({
        message: error.message
      })
    } else {
      res.status(201).json({
        message: 'Data mahasiswa berhasil dibuat',
        mahasiswa
      })
    }
  })
});

router.put('/', (req, res) => {
  const editedQuery = {
    name: req.body.name,
    weight: req.body.weight
  }

  mahasiswaModel.update({ npm: req.body.npm }, editedQuery, (error, mahasiswa) => {
    if (error !== null) {
      res.json({
        message: error.message
      })
    } else {
      res.status(201).json({
        message: 'Data mahasiswa berhasil diubah'
      })
    }
  })
})

router.delete('/', (req, res) => {
  mahasiswaModel.deleteOne({ npm: req.body.npm }, (error, mahasiswa) => {
    if (error !== null) {
      res.json({
        message: error.message
      })
    } else {
      res.status(201).json({
        message: 'Data mahasiswa berhasil dihapus'
      })
    }
  })
})


module.exports = router;