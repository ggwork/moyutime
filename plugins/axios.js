// import queryString  from 'query-string'
export default function({ $axios }) {
  $axios.onRequest(config => {
    return config
  })
  $axios.onResponse(response => {
    // 如果是流
    if (response.config.url === '/api/downloadBook') {
        return response.data
    } else {
      const res = response.data
      if (res.code !== 0) {
        window.$nuxt.$message({
          message: res.msg || 'Error',
        })
        return new Promise(()=>{})
      } else {
        return res.data
      }
    }
    
  })
  $axios.onError(error => {
    window.$nuxt.$message({
      message: error.message,
    })
    return Promise.reject(error)
  })
}