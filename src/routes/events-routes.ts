import { Router } from 'express'
import EventsController from '../controllers/events-controller'

const eventsController = new EventsController()
const router: Router = Router()

router.get('/', eventsController.fetchEvents)

module.exports = router