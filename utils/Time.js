// @flow
import moment from 'moment'

export default class TimeUtil {
  static unix2mmss (unix: number): string {
    return moment(unix).format('mm:ss')
  }
}
