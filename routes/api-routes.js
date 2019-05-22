var db = require("../models");

module.exports = function (app, router) {
  router.get('/', function (req, res) {
    res.render("entries", {});
    //res.render("home", {});
  })
};
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var path = require("path");
//var newEvent = require("../public/js/data");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/tracker", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/entries.html"));
  });

  app.get("/api/events", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.events.findAll({}).then(function (dbEvents) {
      console.log(dbEvents);
      console.log("accessed api events GET");


      res.json(dbEvents);
    });
  });

  // POST route for saving a new todo
  app.post("/api/events", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    console.log(req.body);
    db.events.create({
      title: req.body.title,
      start: req.body.start,
      end: req.body.end
    }).then(function (dbEvents) {
      // We have access to the new todo as an argument inside of the callback function
      console.log(dbEvents);
      res.json(dbEvents);
    })

      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        console.log("error");

        res.json(err);

      });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/events/:id", function (req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.events.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbEvents) {
      res.json(dbEvents);
    });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/events", function (req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.events.update({
      title: req.body.title,
      start: req.body.start,
      end: req.body.end
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (dbEvents) {
        res.json(dbEvents);
      })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  app.post("/api/bps", function (req, res) {
    db.Bps.create({
      date: req.body.date,
      systolic: req.body.systolic,
      diastolic: req.body.diastolic,
      pulse: req.body.pulse
    }).then(function (dbOntrack) {
      res.json(dbOntrack);
    });

  });

  app.post("/api/doctors", function (req, res) {
    db.Doctors.create({
      name: req.body.name,
      location: req.body.location
    }).then(function (dbOntrack) {
      res.json(dbOntrack);
    });

  });

  app.post("/api/exercises", function (req, res) {
    db.Exercises.create({
      date: req.body.date,
      type: req.body.type,
      duration: req.body.duration
    }).then(function (dbOntrack) {
      res.json(dbOntrack);
    });

  });

  app.post("/api/foods", function (req, res) {
    db.Foods.create({
      date: req.body.date,
      meal: req.body.meal,
      name: req.body.name,
      calorie: req.body.calorie,
      sugar: req.body.sugar,
      sodium: req.body.sodium
    }).then(function (dbOntrack) {
      res.json(dbOntrack);
    });

  });

  app.post("/api/mhnotes", function (req, res) {
    db.Mhnotes.create({
      date: req.body.date,
      mood: req.body.mood,
      note: req.body.note
    }).then(function (dbOntrack) {
      res.json(dbOntrack);
    });

  });

  app.post("/api/prescriptions", function (req, res) {
    db.Prescriptions.create({
      name: req.body.name,
      dosage: req.body.dosage
    }).then(function (dbOntrack) {
      res.json(dbOntrack);
    });

  });

  // GET Routes
  app.get("/api/prescriptions/all", function (req, res) {
    db.Prescriptions.findAll({}).then(function (allPrescriptions) {
      res.json(allPrescriptions);
    });
  });

  app.get("/api/doctors/all", function (req, res) {
    db.Doctors.findAll({}).then(function (allDoctorNotes) {
      res.json(allDoctorNotes);
    });
  });

  app.get("/api/mhnotes/all", function (req, res) {
    db.Mhnotes.findAll({}).then(function (allMhNotes) {
      res.json(allMhNotes);
    });
  });

  app.get("/api/exercises/all", function (req, res) {
    db.Exercises.findAll({}).then(function (allExercises) {
      res.json(allExercises);
    });
  });

  app.get("/api/foods/all", function (req, res) {
    db.Foods.findAll({}).then(function (allFoods) {
      res.json(allFoods);
    });
  });

  app.get("/api/bps/all", function (req, res) {
    db.Bps.findAll({}).then(function (allBps) {
      res.json(allBps);
    });
  });
}