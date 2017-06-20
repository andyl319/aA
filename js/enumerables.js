Array.prototype.myEach = function (cb){
  for(let x = 0; x < this.length; x++){
    cb(this[x], x, this);
  }
};

[1,2,3,4,5].myEach((num) => {
  console.log(num+3);
});
