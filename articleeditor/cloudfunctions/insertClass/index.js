// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
 
  try {
    return await db.collection('classTable').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        name: event.name,
        classNo: event.classNo,
        teacherId: wxContext.OPENID
      }
    })
  } catch (e) {
    console.error(e)
  }

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}