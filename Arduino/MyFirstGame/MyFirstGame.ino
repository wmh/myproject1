int resetPin = 7;
int ledPin = 13;
int beePin = 4;
int randNumber;

int playerA = 8;
int playerALed = 5;
int playerAStatus = LOW;

int playerB = 11;
int playerBLed = 10;
int playerBStatus = LOW;

int i, j;

void setup() {
  pinMode(resetPin, INPUT);
  pinMode(ledPin, OUTPUT);
  pinMode(beePin, OUTPUT);
  pinMode(playerA, INPUT);
  pinMode(playerALed, OUTPUT);
  pinMode(playerB, INPUT);
  pinMode(playerBLed, OUTPUT);
}
void loop() {
//  digitalWrite(ledPin, (digitalRead(startPin) == HIGH || digitalRead(playerA) == HIGH || digitalRead(playerB) == HIGH) ? HIGH : LOW);
//  delay(50);
  // start
  digitalWrite(ledPin, HIGH);
  delay(500);
  randomSeed(analogRead(0));
  randNumber = random(1500, 2500);
  playerAStatus = playerBStatus = LOW;
  for (i = 0; i < randNumber; ++i) {
    playerAStatus = digitalRead(playerA);
    playerBStatus = digitalRead(playerB);
    if (playerAStatus == HIGH || playerBStatus == HIGH) {
      digitalWrite(playerAStatus == HIGH ? playerALed : playerBLed, HIGH);
      for (j = 0; j < 3; j++) {
        digitalWrite(beePin, HIGH);
        delay(200);
        digitalWrite(beePin, LOW);
        delay(200);
      }
      digitalWrite(playerAStatus == HIGH ? playerALed : playerBLed, LOW);
      break;
    }
    delay(1);
  }
  digitalWrite(ledPin, LOW);
  if (playerAStatus == LOW && playerBStatus == LOW) {
    while (1) {
     if (digitalRead(resetPin) == HIGH) {
       break;
     }
     playerAStatus = digitalRead(playerA);
      playerBStatus = digitalRead(playerB);
      if (playerAStatus == HIGH || playerBStatus == HIGH) {
        digitalWrite(playerAStatus == HIGH ? playerALed : playerBLed, HIGH);
        delay(2000);
        digitalWrite(playerAStatus == HIGH ? playerALed : playerBLed, LOW);
        break;
      }
      delay(10);
    }
  } else {
    delay(500);
  }
}
