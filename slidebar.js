$(function() {
 $( "#slider" ).slider({
  max:255, //最大値
  min: 0, //最小値
  value: 128, //初期値
  step: 1, //幅
  //orientation: "vertical", //縦設置か横設置か

  slide: function( event, ui ) {
   var val = ui.value;
   console.log(val);
   if(val == 0){
     temple.pause();
     temple.currentTime = 0;
     temple.play();
   };
  }
 });
 //ボタンを押したら値を100にする
 $("#valueset").click(function(){
  $("#slider").slider("value",100);
 });
});
