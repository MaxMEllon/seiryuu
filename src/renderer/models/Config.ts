export const user: string = 'local/user'
export const hashtag: string = 'global/hashtag'

export type TimelineType = typeof user | typeof hashtag

export interface IConfigState {
  timelineType: TimelineType
}

export default class ConfigModel implements IConfigState {
  static fromJSON(anyJson: string | null): ConfigModel | null {
    if (anyJson === null || anyJson === undefined) return null
    const obj: any = JSON.parse(anyJson as string)
    return new ConfigModel(obj.timelineType)
  }

  readonly _timelineType

  constructor(type: TimelineType = user) {
    this._timelineType = type
  }

  get timelineType() {
    return this._timelineType
  }

  toJSON(): string {
    return JSON.stringify({
      timelineType: this._timelineType,
    })
  }
}
