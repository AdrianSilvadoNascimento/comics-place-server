import { Router, Request, Response } from 'express'
import { createHash } from 'crypto'
import axios from 'axios'
import Constants from '../constants/constants'

const constants: Constants = new Constants()


export default class ComicController {
  router: Router = Router()
  constructor() {
    this.init()
  }

  private init() {
    this.router.get('/', this.getComics)
    this.router.get('/uniqueComic/:id', this.getSpecificComic)
  }

  async getComics(req: Request, res: Response) {
    try {
      const result = await axios.get(`
        ${constants.URL}comics?${constants.specificQuery}&limit=100
      `)

      if (result.data) {
        res.status(200).json(result.data)
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error })
    }
  }

  async getSpecificComic(req: Request, res: Response) {
    const comicId: string = req.params.id

    try {
      const result = await axios.get(`
        ${constants.URL}comics/${comicId}?${constants.specificQuery}
      `)

      if (result.data) {
        res.status(200).json(result.data)
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error })
    }
  }
}