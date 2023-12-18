
# New Relic Integration

This solution offers a flexible and efficient approach to integrating systems with New Relic's powerful monitoring platform via API.

## Installation

You can install the library using the following command:

```bash
npm install itallorian-newrelic
```

## Requirements

Add the following variables to your environment:

`IRNR_INGESTION_KEY`: Ingestion key present in New Relic configuration
`IRNR_SERVICE_NAME`: Name of your service
`IRNR_HOST_NAME`: Your host name

## **Usage  Examples:**

```markdown
const  irNewRelic  =  require('itallorian-newrelic');

//  Example  1
irNewRelic.Log("Your Log Message"); 

//  Example  2
irNewRelic.Log("Your Error Log Message",  irNewRelic.LogLevel.ERROR);
``` 
  
## **Detailed  Documentation:**


### `Log(message, level)`

The  `Log`  method takes two parameters:  `message`  and  `level`. The  `message`  parameter is the log message to be logged, and the  `level`  parameter is the log level. If no level is provided, it defaults to  `LogLevel.DEBUG`.

Inside the  `Log`  method, a  object is created with the following properties:

-   `timestamp`: the current time in milliseconds since the Unix Epoch.
-   `message`: the processed log message.
-   `level`: the log level.
-   `service`: the name of the service, taken from constants.
-   `hostname`: the name of the host, taken from constants.

This  object is then sent to New Relic, a real-time monitoring service.

### `LogLevel`
**LogLevel** is an object with this options.

 - `DEBUG`: Used for detailed information on the flow through the system.
   
 - `INFO`: Used to confirm that things are working as expected.
   
 -  `WARN`: Used to indicate that something unexpected happened, or there
   might be a problem in the near future (e.g., 'disk space low'). The
   software is still working as expected.
   
 -  `ERROR`: Used to indicate that the software has not been able to
   perform some function.