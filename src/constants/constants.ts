import { createHash } from "crypto"

export default class Constants {
  public publicKey = process.env.PUBLIC_KEY
  public privateKey = process.env.PRIVATE_KEY
  public str = `${new Date().toDateString()}${this.privateKey}${this.publicKey}`
  public hash = createHash('md5').update(this.str).digest('hex')
  public URL = 'http://gateway.marvel.com/v1/public/'
  public specificQuery = `ts=${new Date().toDateString()}&apikey=${this.publicKey}&hash=${this.hash}`
}
