function startClassifictaion() {
     navigator.mediaDevices.getUserMedia({audio:true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1eHFB1P3L/',modelReady);
 }
 function modelReady() {
     classifier.classify(gotResult);
 }
 function gotResult(error, results) {
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
     }
 }