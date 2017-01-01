//鐘の音
var temple = new Audio("./temple.mp3");

var i = 0;

$("#push").click(function(){
  //108回を超えていたら確認のポップアップを出す
  if(i == 108){
    var que = confirm("まだ煩悩あるの？");
    //はい か いいえを確認し、分岐
    if(que == true){
      i++;
      $("#count").text(i);
      temple.pause();
      temple.currentTime = 0;
      temple.play();
    }else{
      alert("ここでカウントを止めておきますね");
    }
  //108ではなければ続行
  }else{
    i++;
    $("#count").text(i);
    temple.pause();
    temple.currentTime = 0;
    temple.play();
  };
});
