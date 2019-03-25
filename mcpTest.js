const mcpadc = require('mcp-spi-adc');

const pHSensor = mcpadc.open(0, {speedHz: 20000}, (err) => {
  if (err) throw err;

  setInterval(() => {
    pHSensor.read((err, reading) => {
      if (err) throw err;

      console.log("EC Sensor " + (reading.value));
    });
  }, 1000);

});
const ECSensor = mcpadc.open(2, {speedHz: 20000}, (err) => {
  if (err) throw err;

  setInterval(() => {
    pHSensor.read((err, reading) => {
      if (err) throw err;

      console.log("pH sensor " + (reading.value));
    });
  }, 1000);
});

const tempSensor = mcpadc.open(4, {speedHz: 20000}, (err) => {
  if (err) throw err;

  setInterval(() => {
    tempSensor.read((err, reading) => {
      if (err) throw err;

      console.log("temp sensor " + (reading.value));
    });
  }, 1000);
});

const testSensor = mcpadc.open(7, {speedHz: 20000}, (err) => {
  if (err) throw err;

  setInterval(() => {
    testSensor.read((err, reading) => {
      if (err) throw err;

      console.log("test sensor " + (reading.value));
    });
  }, 1000);
});