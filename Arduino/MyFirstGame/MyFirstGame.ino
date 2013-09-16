int startPin = 7;
int playerA = 8;
int playerB = 11;

int ledPin=13;
int switchState=HIGH;
int ledState=LOW;

void setup() {
  pinMode(startPin, INPUT);
  pinMode(playerA, INPUT);
  pinMode(playerB, INPUT);
  pinMode(ledPin, OUTPUT);
}
void loop() {
  digitalWrite(ledPin, digitalRead(startPin) == HIGH || digitalRead(playerA) == HIGH || digitalRead(playerB) == HIGH ? LOW : HIGH);
  delay(50);

}
