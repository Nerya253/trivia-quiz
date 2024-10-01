#include <Keyboard.h>

#define BtnR 6
#define BtnG 7
#define BtnB 8
#define BtnY 9

#define ARR_LENGTH 4
int btns[ARR_LENGTH] = {BtnR, BtnB, BtnG, BtnY};
char Keys[ARR_LENGTH] = {'a' ,'b' ,'c' ,'d'};
bool btnReleased[ARR_LENGTH] = {true, true, true, true}; 

unsigned long lastPressTime[ARR_LENGTH];

void setup() {
  Serial.begin(9600);
  for (int k = 0; k < ARR_LENGTH; k++) {
    pinMode(btns[k], INPUT_PULLUP);
    lastPressTime[k] = 0;
  }
  Keyboard.begin();
}

void loop() {
  for (int k = 0; k < ARR_LENGTH; k++) {
    int btnState = digitalRead(btns[k]);

    if (btnState == LOW) {
      if (btnReleased[k] && (millis() - lastPressTime[k]) > 200) {
        lastPressTime[k] = millis();
        Keyboard.press(Keys[k]);
        Serial.println(Keys[k]);
        btnReleased[k] = false;
      }
    } 
    else {
      btnReleased[k] = true; 
    }
  }
  
  Keyboard.releaseAll();
}
