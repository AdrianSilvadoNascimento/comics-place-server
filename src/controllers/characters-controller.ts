import { Router, Request, Response } from 'express'
import axios from 'axios'

import Constants from '../constants/constants'

const constants: Constants = new Constants()

export default class CharacterController {
  router: Router = Router()
  
  constructor() {
    this.init()
  }

  private init() {
    this.router.get('/', this.fetchCharacters)
  }

  async fetchCharacters(req: Request, res: Response) {
    try {
      const results = await axios.get(`${constants.URL}characters?${constants.specificQuery}&limit=50`)

      if (results.data) {
        res.status(200).json(results.data)
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error })
    }
  }
}