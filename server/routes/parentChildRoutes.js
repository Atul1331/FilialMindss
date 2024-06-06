import express from 'express'
import { scoreGet, scorePost } from '../controllers/parentChildController.js'

const router = express.Router()

router.get('/score-get', scoreGet)
router.post('/score', scorePost)

export default router
