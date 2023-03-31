import { Router } from 'express'
import ComicController from '../controllers/comics-controller'

const router: Router = Router()
const comicController = new ComicController()

router.get('/', comicController.getComics)
router.get('/uniqueComic/:id', comicController.getSpecificComic)

module.exports = router
