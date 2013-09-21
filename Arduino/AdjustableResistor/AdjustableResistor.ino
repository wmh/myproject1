int ledPin = 11;
int inNum;
int outNum;
void setup()
{
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}
void loop()
{
  inNum = analogRead(A0);
  Serial.println(inNum);
  delay(1000);
}
void loop2()
{
  inNum = analogRead(A0);
  outNum = (int)(analogRead(A0) / 4);
  Serial.println(inNum);
  analogWrite(ledPin, outNum);
  delay(100);
}
