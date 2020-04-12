const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Create global app objects
const app = express();

// Swagger definition
const swaggerDefinition = {
  info: {
    title: 'Block Scan API V1', // Title of the documentation
    version: '1.0.0', // Version of the app
    description: 'EveryThing About V1 Block Scan API', // short description of the app
  },
  host: 'blockscan.shop', // the host or url of the app
  basePath: '/api/v1', // the basepath of your endpoint
};

// options for the swagger docs
const options = {
  // import swaggerDefblocinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./docs/**/*.yaml'],
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// use swagger-Ui-express for your app documentation endpoint
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const server = app.listen(process.env.PORT || 3031, () => {
    // eslint-disable-next-line no-console
    console.log(`'Listening on port '${server.address().port}`);
  });