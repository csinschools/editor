const badWords = ["fuck", "tit", "penis", "cunt", "faggot", "shit"]    
var text = "ahhh poo"

for (let i = 0; i < badWords.length; i++) {
  if (text.indexOf(badWords[i]) > -1) {
    text = "nice try, lol";
  }
}
  
var utterThis = new SpeechSynthesisUtterance(text);
if (voice >= voices.length) {
    voice = 0;
  } 
utterThis.voice = voices[voice];
utterThis.pitch = 1;
utterThis.rate = 1;
synth.speak(utterThis);  