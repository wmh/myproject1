int thisPin = 10;
void setup() {
  pinMode(thisPin, OUTPUT);
}
void loop() {
  for (int brightness = 0; brightness < 255; brightness++) {
    analogWrite(thisPin, brightness);
    delay(2);
  } 
  // fade the LED on thisPin from brithstest to off:
  for (int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(thisPin, brightness);
    delay(1);
  } 
  delay(500);
}
