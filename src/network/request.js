import axios from 'axios'

export function request(config, suc, fail) {
    const instance = axios.create();
    instance(config).then(res=>suc(res)).catch(err=>fail(err))
}