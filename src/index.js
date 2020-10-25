module.exports = function reverse (n) {
  let str = n + '';
  let arr = str.split('');
  let rev = arr.reverse();
  let str1 = rev.join('');
  return parseInt(str1); 
}
