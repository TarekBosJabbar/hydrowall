const spi = require('spi-device');

// The MCP3008 is on bus 0 and it's device 0
const mcp3008 = spi.open(0, 0, (err) => {
  // An SPI message is an array of one or more read+write transfers
  const message = [{
    sendBuffer: Buffer.from([0x01, 0xd0, 0x00]), // Sent to read channel 5
    receiveBuffer: Buffer.alloc(3),              // Raw data read from channel 5
    byteLength: 3,
    speedHz: 20000 // Use a low bus speed to get a good reading from the TMP36
  }];

  if (err) throw err;

  mcp3008.transfer(message, (err, message) => {
    if (err) throw err;

    // Convert raw value from sensor to celcius and log to console
    const rawValue = ((message[0].receiveBuffer[1] & 0x03) << 8) +
      message[0].receiveBuffer[2];
    const voltage = rawValue * 3.3 / 1023;

    console.log(voltage);

    const ph  = (voltage - .41412) / -.05916;

    console.log("the ph is" + ph);
  });
});