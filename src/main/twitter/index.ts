import * as dotenv from 'dotenv'
import * as Twitter from 'twitter'

dotenv.config({
  path: `${__dirname}/../../../.env`,
})

const client = new Twitter({
  access_token_key: process.env.TWITTER_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET_KEY,
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET_KEY,
})

export default class TwitterSubscriber {
  userStream: any
  globalStream: any

  constructor() {
    this.userStream = client.stream('user')
  }

  subscribeUserStream(socket: any) {
    this.userStream.on('data', (e: object) => {
      socket.send('tweet', JSON.stringify(e))
    })
  }

  subscribeHashTag(socket: any, tag: string) {
    if (!(this.globalStream === null || this.globalStream === undefined)) this.globalStream.destroy()
    this.globalStream = client.stream('statuses/filter', {track: tag})
    this.globalStream.on('data', (e: object) => {
      socket.send('tweet', JSON.stringify(e))
    })
  }

  disconnectUserStream(): void {
    this.userStream.destroy()
  }
}
