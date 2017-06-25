import * as dotenv from 'dotenv'
import * as Twitter from 'twitter'

dotenv.config({
  path: `${__dirname}/../../../.env`
})

const client = new Twitter({
  access_token_key: process.env.TWITTER_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET_KEY,
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET_KEY
})

const stream = client.stream('user')

export default function deliveryToRenderer (emitter: any): void {
  stream.on('data', (e: object) => {
    emitter.send('tweet', JSON.stringify(e))
  })
}
