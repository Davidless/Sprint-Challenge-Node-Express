const express = require('express');
const dbProjects = require('../data/helpers/projectModel');
const router = express.Router();

// get a existing projects
router.get('/', (req, res) => {
  dbProjects.get()
    .then(projects => res.json(projects)) // returns array of objects with props id, name, description, completed
    .catch(err => res.status(500).json({ error: "Could not retrieve any projects." }))
})

// get project via id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  dbProjects.get(id)
    .then(project => res.json(project))
    .catch(err => res.status(500).json({ error: "This project does not exist." }))
})

// get all actions of a project via projectID
router.get('/:id/actions', (req, res) => {
  const { id } = req.params;
  dbProjects.getProjectActions(id)
    .then(actions => res.json(actions)) // returns array of objects
    .catch(err => res.status(500).json({ error: "Cannot retrieve any actions with the provided ID." }))
})

// add a new project
router.post('/', (req, res) => {
  // name and description are required .. id, completed, actions are added automatically
  const newProject = req.body; 
  dbProjects.insert(newProject)
    .then(response => res.json(response)) // returns object of new project
    .catch(err => res.status(500).json({ error: "Cannot add this project." }))
})

// update an existing project
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedInfo = req.body;
  dbProjects.update(id, updatedInfo)
    .then(updatedProject => res.json(updatedProject)) // returns updated project object
    .catch(err => res.status(500).json({ error: "Cannot update this project with the provided ID." }))
})

// delete a project
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  dbProjects.remove(id)
    .then(response => res.json(response)) // returns 1 for success, 0 for failure
    .catch(err => res.status(500).json({ error: "Cannot remove this project with the provided ID." }))
})

module.exports = router;