class NewsController {
 index(req, res) {
  // [GET] /news
  res.render('news')
 }

 //[GET] /news/:slug
 detail(req, res) {
  res.send('this is page detail')
 }
}

module.exports = new NewsController;