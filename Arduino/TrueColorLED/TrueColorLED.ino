int R = 11;
int B = 10;
int G = 9;

void setup() {
  pinMode(R, OUTPUT);
  pinMode(G, OUTPUT);
  pinMode(B, OUTPUT);
}
void loop() {
  for (int brightness = 0; brightness < 255; brightness++) {
    analogWrite(R, brightness / 2);
    analogWrite(G, brightness);
    analogWrite(B, brightness);
    delay(2);
  } 
  // fade the LED on thisPin from brithstest to off:
  for (int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(R, brightness / 2);
    analogWrite(G, brightness);
    analogWrite(B, brightness);
    delay(1);
  } 
  delay(500);
}
