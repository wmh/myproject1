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
      digitalWrite(6, ledState);
    }
  }
  delay(100);
}
