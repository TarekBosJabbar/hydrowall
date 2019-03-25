const mcpadc = require('mcp-spi-adc');

const pHSensor = mcpadc.open(1, {speedHz: 20000}, (err) => {
  if (err) throw err;

  setInterval(() => {
    pHSensor.read((err, reading) => {
      if (err) throw err;

      console.log("EC Sensor " + (reading.value * 3.3 - 0.5) * 100);
    });
  }, 1000);

});
const ECSensor = mcpadc.open(3, {speedHz: 20000}, (err) => {
  if (err) throw err;

  setInterval(() => {
    pHSensor.read((err, reading) => {
      if (err) throw err;

      console.log("pH sensor " + (reading.value * 3.3 - 0.5) * 100);
    });
  }, 1000);
});