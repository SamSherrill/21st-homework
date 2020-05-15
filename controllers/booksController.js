// Make functions here. They will need to be exported.

const bookModel = require("../models/bookModel.js");

// The functions inside this are setup as key: value pairs because they are are exported as an object
module.exports = {
    // back end functions go here to send requests to
    // my DB
    // check act 4 unit 21 booksController.js

    // // from readme: `/api/books` (get) - Should return all saved books as JSON.
    // // that is this findAll below
    // findAll: function (req, res) {
    //     db.Book
    //         .find(req.query)
    //         .sort({
    //             date: -1
    //         })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // findById: function (req, res) {
    //     db.Book
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // // From readme: `/api/books` (post) - Will be used to save a new book to the database.
    // // That'll be this create function below
    // create: function (req, res) {
    //     db.Book
    //         .create(req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // Not sure if I'll need this update route
    // update: function (req, res) {
    //     db.Book
    //         .findOneAndUpdate({
    //             _id: req.params.id
    //         }, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // // From readme: `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
    // // That will use the findById function above, and will then use this remove function below
    // remove: function (req, res) {
    //     db.Book
    //         .findById({
    //             _id: req.params.id
    //         })
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // }
}