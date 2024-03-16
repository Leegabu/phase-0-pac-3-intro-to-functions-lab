function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(inputString) {
    if (typeof inputString !== 'string') {
      throw new Error('Input must be a string');
    }
    console.log(inputString.toUpperCase());
  }
function logWhisper(inputString) {
    if (typeof inputString !== `string`){
        throw new Error('Input must be a string');
    }
    console.log(inputString.toLowerCase());
}
 function sayHiToHeadphonedRoommate(str) {
  const upperStr = str.toUpperCase();
  if (str  === upperStr.toLowerCase()) {
    return "I can't hear you!";
  }
  if (str === upperStr) {
    return "YES INDEED!";
  }
  if (str === "Let's have dinner together!") {
    return "I would love to!";
  }
  return "I didn't understand that.";
}
