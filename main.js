var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;

    console.log(content);
    speaking();

    
}
function speaking (){
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak (utterthis);
    Webcam.attach(camera);

}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_qualtiy:90

});
camera=document.getElementById("camera");