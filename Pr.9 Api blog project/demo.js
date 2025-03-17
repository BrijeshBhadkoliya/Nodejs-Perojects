// Johnny-Five लाइब्रेरी को इम्पोर्ट करें
const five = require("johnny-five");

// बोर्ड (जैसे Arduino) का एक उदाहरण बनाएँ
const board = new five.Board();

// जब बोर्ड तैयार हो जाए, तब कोड execute होगा
board.on("ready", function() {
  // Arduino के 13 नंबर पिन पर LED को सेट करें
  const led = new five.Led(13);
  
  // LED को हर 500 मिलीसेकंड में ऑन/ऑफ करें
  led.blink(500);
});