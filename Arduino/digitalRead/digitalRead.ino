int switchPin=5;
int ledPin=6;
int switchState=HIGH;
int ledState=LOW;

void setup() {
  pinMode(5, INPUT);
  pinMode(6, OUTPUT);
}
void loop() {
  int currentState = digitalRead(5);
  if (currentState != switchState) {
    switchState = currentState;
    if (currentState == LOW) {
      ledState = ledState == LOW ? HIGH : LOW;
    }
  }
  if (ledState == HIGH) {
    digitalWrite(6, HIGH);
    delay(100);
    digitalWrite(6, LOW);
    delay(100);
  } else {
    delay(100);
  }
}
