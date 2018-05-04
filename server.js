const express = require('express');
const helmet = require('helmet');
const server = express();

const actionsRoutes = require('./resources/actions');
const projectsRoutes = require('./resources/projects');

server.use(helmet());
server.use(express.json());

server.use('/projects', projectsRoutes);
server.use('/actions', actionsRoutes);

// server.get('/', (req, res) =>
//   res.send( 'Running...' ));

server.listen(8000, () => console.log('API Running on Port 8000'));