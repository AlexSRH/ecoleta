import { Request, Response } from 'express'
import db from '../database/connection'
import serializateImageUrl from '../utils/serializateImageUrl'

class ItemsController {
  async index (request: Request, response: Response) {
    const items = await db('items').select('*')

    const serializedItem = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: serializateImageUrl(item.image)
      }
    })

    return response.json(serializedItem)
  }
}

export default ItemsController
