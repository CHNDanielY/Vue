var Mock = require('mockjs')
const Random = Mock.Random
const produceDate = function (opt) {
  console.log('opt', opt)
  let articles = []
  for (let i = 0; i < 30; i++) {
    let newAricleObject = {
      title: Random.csentence(5, 30),
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),
      author_name: Random.cname(),
      date: Random.date() + '' + Random.time()
    }
    articles.push(newAricleObject)
  }
  return articles
}
Mock.mock('/news', /post|get/i, produceDate)
