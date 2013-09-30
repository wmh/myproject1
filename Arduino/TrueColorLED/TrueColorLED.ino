int R = 9;
int G = 11;
int B = 10;

void setup() {
  pinMode(R, OUTPUT);
  pinMode(G, OUTPUT);
  pinMode(B, OUTPUT);
}
void loop() {
  for (int brightness = 0; brightness < 255; brightness++) {
    analogWrite(R, brightness);
    analogWrite(G, brightness);
    delay(2);
  } 
  // fade the LED on thisPin from brithstest to off:
  for (int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(R, brightness);
    analogWrite(G, brightness);
    delay(1);
  } 
  delay(500);
}
