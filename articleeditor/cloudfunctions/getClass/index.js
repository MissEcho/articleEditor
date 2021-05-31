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
    let res= await db.collection('classTable').where({
      teacherId: wxContext.OPENID,
    }).get({})
    res.data.map(item=>{
      let stu=await db.collection('classTable').where({
        teacherId: wxContext.OPENID,
      }).get({})
    })
    return res
  } catch (e) {
    console.error(e)
  }
}