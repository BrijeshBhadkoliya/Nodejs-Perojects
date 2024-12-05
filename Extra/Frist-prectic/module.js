function hey() {
  a = 10;
  b = 10;
  return a + b;
}

function hello(a, b) {
  return a + b;
}
obj = {
  a: 10,
  b: 10,
  add: function (a,b) {
    function plus(a, b) {
      return a + b;
    }
    function  minus(a, b) {
        return a + b;
      }
  },
};

module.exports = {
  kem: hey,
  hel: hello,
  obj: obj,
};
