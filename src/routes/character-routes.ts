import { Router } from 'express'

import CharacterController from '../controllers/characters-controller'

const router: Router = Router()
const comicController = new CharacterController()

router.get('/', comicController.fetchCharacters)

module.exports = router
