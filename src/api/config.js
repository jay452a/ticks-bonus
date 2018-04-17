export default (process.env.NODE_ENV === 'development'
  ? {
    //开发环境
        host: 'https://www.plum5.com'
    }
  : {
      // 发布环境
      host: 'https://www.plum5.com'
    });
