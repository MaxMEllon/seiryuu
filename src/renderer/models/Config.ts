export const user: string = 'local/user'
export const hashtag: string = 'global/hashtag'

export type TimelineType = typeof user | typeof hashtag

export interface IConfigState {
  timelineType: TimelineType
}

export default class ConfigModel implements IConfigState {
  readonly _timelineType

  constructor(type: TimelineType = user) {
    this._timelineType = type
  }

  get timelineType() {
    return this._timelineType
  }
}
