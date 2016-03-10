module.exports = (function () {
  console.log("Globals executed");
  if (typeof String.prototype.trim != 'function') { // detect native implementation
    String.prototype.trim = function () {
      return this.replace(/^\s+/, '').replace(/\s+$/, '');
    };
  }
})();

