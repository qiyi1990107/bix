import http from 'http';
import axios from 'axios';
const smsHOST = 'http://api.eobzz.com/';
const XBIHOST = 'http://www.xbi.cc/';
export default {
    getMobilenum(params) {
        return axios.get(smsHOST + 'httpApi.do?', {
            params: Object.assign({}, {
                pid: '57218',
                token: 'ef0c82eaa8cd0ad6d54185574942ccf5',
                uid: 'qiyi1990107'
            }, params)
        })
    }
}






