int switchPin=5;
int ledPin=6;

void setup() {
  pinMode(5, INPUT);
  pinMode(6, OUTPUT);
}
void loop() {
  if (digitalRead(5) == LOW)
  {
    digitalWrite(6, HIGH);
  }
  else
  {
    digitalWrite(6, LOW);
  }
}
