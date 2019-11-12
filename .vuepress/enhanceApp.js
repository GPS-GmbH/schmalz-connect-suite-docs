const axios = require('axios')
export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    Vue.prototype.$axios = axios
}
