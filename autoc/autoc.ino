#define ROBOT_NAME "AutoCompartido"

#define BLUETOOTH_SPEED 57600
// #define BLUETOOTH_SPEED 57600

#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 11); // RX, TX

void setup() {
  pinMode(9, OUTPUT); 
  digitalWrite(9, HIGH);
  Serial.begin(9600);
  while (!Serial) {
    ; 
  }
  Serial.println("Starting config");
  mySerial.begin(BLUETOOTH_SPEED);
  delay(1000);

  mySerial.print("AT\r\n");
  waitForResponse();

  mySerial.print("AT+VERSION\r\n");
  waitForResponse();

  mySerial.print("AT+PSWD=0000\r\n");
  waitForResponse();

  String rnc = String("AT+NAME=") + String(ROBOT_NAME) + String("\r\n"); 
  mySerial.print(rnc);
  waitForResponse();

  mySerial.print("AT+UART=57600,0,0\r\n");
  waitForResponse();

  Serial.println("Done!");
}

void waitForResponse() {
    delay(1000);
    while (mySerial.available()) {
      Serial.write(mySerial.read());
    }
    Serial.write("\n");
}

void loop() {}
