int thisPin = 10;
int baudRate = 9600;
void setup() {
  pinMode(thisPin, OUTPUT);
  Serial.begin(baudRate);
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
  Serial.println("End");
  delay(1500);
  Serial.println("Start");
}
