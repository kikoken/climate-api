import express from 'express'

// controllers
import { WheatherCtrl } from '../controllers'

const router = express.Router()

// Data de la ciudad
router.get('/wheather/:coord', async (req, res) => {
  let cityData = await WheatherCtrl.getDataByCity(req.params.coord)
  return res.status(200).json({data: cityData})
})

export default router