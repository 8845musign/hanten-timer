import moment from 'moment'

export default class TimeUtil {
  static unix2mmss (unix) {
    return moment(unix).format('mm:ss')
  }
}
