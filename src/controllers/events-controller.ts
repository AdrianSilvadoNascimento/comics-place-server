import { Router, Request, Response } from 'express'
import axios from 'axios'
import Constants from '../constants/constants'

const constants = new Constants()

export default class EventsController {
  router: Router = Router()
  
  constructor() {
    this.init()
  }

  private init() {
    this.router.get('/', this.fetchEvents)
  }

  async fetchEvents(req: Request, res: Response) {
    try {
      const results = await axios.get(`${constants.URL}events?${constants.specificQuery}&limit=50`)

      if (results.data) {
        res.status(200).json(results.data)
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error })
    }
  }
}