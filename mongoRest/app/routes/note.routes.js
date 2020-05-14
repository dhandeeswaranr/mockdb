const notes = require('../controllers/note.controller.js');


module.exports = (app) => {

    // Create a new Note
    app.post('/notes', notes.create);

    app.post('/tools', (req, res, next) => {
        console.log('ree', req)
        
    });

    app.post("/personnel", (request, response) => {
        
        // collection("notes").insert(request.body, (error, result) => {
        //     if(error) {
        //         return response.status(500).send(error);
        //     }
        //     response.send(result.result);
        // });
    });

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}