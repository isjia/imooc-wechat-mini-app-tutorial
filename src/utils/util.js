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

var convertToStarArray = function(star){
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

module.exports = {
  formatTime: formatTime,
  convertToStarArray: convertToStarArray
}
