import io from 'api/io'
import host from 'api/config'
import utils from 'src/common/js/util'
const {host: base} = host

const api = {
  // 获取刚才开奖接口
  getBonus: params => io.get(`${base}/number/willopenOut?lotteryCode=${params}` ),
  getHistoryBonus: params => io.get(`${base}/number/moreOpenedOut?${utils.urlEncode(params)}`)

}

export default api
