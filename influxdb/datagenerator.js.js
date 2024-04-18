const Influx = require('influx');

// Konfigurasjon for tilkobling til InfluxDB
const influx = new Influx.InfluxDB({
  host: 'localhost', // Navnet på InfluxDB-tjenesten i Docker-nettverket
  database: 'mydatabase', // Navnet på databasen du vil bruke
  schema: [
    {
      measurement: 'random_numbers',
      fields: {
        value: Influx.FieldType.INTEGER
      },
      tags: []
    }
  ]
});

// Funksjon for å generere tilfeldige tall og sende dem til InfluxDB
const generateAndSendData = async () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  try {
    await influx.writePoints([
      {
        measurement: 'random_numbers',
        fields: { value: randomNumber },
      }
    ]);
    console.log(`Random number sent to InfluxDB: ${randomNumber}`);
  } catch (error) {
    console.error('Error sending data to InfluxDB:', error);
  }
};

// Kjør funksjonen hvert sekund
setInterval(generateAndSendData, 6000);
