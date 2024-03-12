

function checkResult() {
    var studentScore = Number(score.value)

    if (isNaN(studentScore) || score.value === "" || score.value < 0 || 1/ studentScore === -Infinity) {
         document.getElementById("result").style.color = "red"
         document.getElementById("result").style.fontWeight = "600"
         document.getElementById("result").innerHTML = 'INVALID'

        
     }
     
     else if (studentScore >= 0 && studentScore < 40) {
       result.innerHTML = 'F - Fail'
       document.getElementById("result").style.color = "red"
       document.getElementById("result").style.fontWeight = "600"
     //   document.getElementById("seeHere").style.marginLeft = "-50px"
       var songFailure = new Audio ('audio/Snaptik.app_7091026907155713285.mp3')
       songFailure.play()
  
 
 
  } else if (studentScore >= 40 && studentScore < 45) {
      result.innerHTML = 'E - Pass'
      var songPass = new Audio ('audio/965e9cf94facd88d609cf4744a66a9f9.mp3')
      songPass.play()
      document.getElementById("result").style.fontWeight = "600"

 
   
  } else if (studentScore >= 45 && studentScore < 50) {
       result.innerHTML = 'D - Average'
       var songAverage = new Audio ('audio/Screenrecorder-2024-03-10-22-20-21-381.mp3')
       songAverage.play()
       document.getElementById("result").style.fontWeight = "600"

        
  } else if (studentScore >= 50 && studentScore < 60) {
      result.innerHTML = 'C - Credit'
      var songCredit = new Audio ('audio/tiktok_1710108950142736636.mp3')
      songCredit.play()
      document.getElementById("result").style.fontWeight = "600"

 
  } else if (studentScore >= 60 && studentScore < 70 ) {
       result.innerHTML = 'B - Good'
       var songGood = new Audio ('audio/applause-108368.mp3')
       songGood.play()
       document.getElementById("result").style.fontWeight = "600"

       
  } else if (studentScore >= 70 && studentScore <= 100 ) {
       result.innerHTML = 'A - Excellent'
       var songExcellent = new Audio ('audio/sound-effect-applause-159315.mp3')
       songExcellent.play()
       document.getElementById("result").style.fontWeight = "600"

        
  } else if ( studentScore > 100 && studentScore <= -0) {
       result.innerHTML = 'Fear grip you nih?'
        
  } else  {
      result.innerHTML = 'Not Found'
 
  }
 }  