int lightOn = 100;
int sleep = 2000;
int loopCnt = 5;
void setup() {
  pinMode(12, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(7, OUTPUT);
}
void loop() {
  digitalWrite(12, HIGH);
  for (int i = 0; i < loopCnt; ++i) {
    delay(lightOn);
    digitalWrite(7, LOW);
    digitalWrite(10, HIGH);
    delay(lightOn);
    digitalWrite(12, LOW);
    digitalWrite(8, HIGH);
    delay(lightOn);
    digitalWrite(10, LOW);
    digitalWrite(7, HIGH);
    delay(lightOn);
    digitalWrite(8, LOW);
    digitalWrite(12, HIGH);
  }
  digitalWrite(12, LOW); // Yes, it should turn down immediately.
  delay(lightOn);
  digitalWrite(7, LOW);
  delay(sleep);  
  }
