import Router from 'express'
const router=Router()
import authMiddleware from '../middleware/authMiddleware.js'
import podcastController from '../controllers/podacast.js'
import upload from '../middleware/multer.js'

//add podcast
router.post("/addPodcast",authMiddleware,upload,podcastController.addPodcast)

//get all podacast
router.get("/getAllPodcasts",podcastController.getAllPodcast)

// get userpodcast
router.get("/getUserPodcast",authMiddleware,podcastController.getUserPodcast)

//get podcastById
router.get("/getPodcastById/:id",podcastController.getPodcastById)

//get podCastByCategory
router.get("/getPodcastByCategory/:cat",podcastController.getPodcastByCategory)

export default router