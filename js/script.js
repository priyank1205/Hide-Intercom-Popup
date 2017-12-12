// function hide(){
//      // document.getElementById('intercom-container').style.display='none';
//      console.log(document.readyState);
// };

// $("#intercom-container").ready(function(){
//   console.log("please");
//   $("#intercom-container").css("display", "none");
// });

function waitForElement(elementId, callBack){
  window.setTimeout(function(){
    var element = document.getElementById(elementId);
    if(element){
      callBack(elementId, element);
    }else{
      waitForElement(elementId, callBack);
    }
  },500)
}

waitForElement("intercom-container",function(){
    document.getElementById('intercom-container').style.display='none';
});
