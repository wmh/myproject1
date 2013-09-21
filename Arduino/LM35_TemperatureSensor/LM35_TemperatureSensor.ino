void setup()
{
  Serial.begin(9600);
}
void loop()
{
  int val = analogRead(A0);
  float temp = ((val * 5.0)/1024.0)*100;
  Serial.println(temp);
  delay(1000);
}
