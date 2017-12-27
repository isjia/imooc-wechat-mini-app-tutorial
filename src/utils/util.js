const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const convertToStarArray = function(star){
  var stars = [0,0,0,0,0];
  var starNum = star.toString().substring(0, 1);
  for (var i = 0; i < starNum; i++){
    stars[i] = 1;
  }
  if (star.toString().substring(1) == '5') {
    stars[i] = 5;
  }
  return stars;
}

const getMovies = function(url, start, count, cb) {
  var getMoviesUrl = url + '?start=' + start + '&count=' + count;
  wx.request({
    url: getMoviesUrl,
    method: 'GET',
    header: {
      "Content-Type": "json"
    },
    success: function (res) {
      cb(res.data);
    }
  })
}

module.exports = {
  formatTime: formatTime,
  convertToStarArray: convertToStarArray,
  getMovies: getMovies
}
