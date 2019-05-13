var db = require("../../models");
var public = require("../public");

module.exports = function (app, router) {
  router.get('/', function (req, res) {
    res.render("entries", {});
    //res.render("home", {});
  })


  function SavePrescription() {

    app.post("/", function (req, res) {
      db.Ontrack.create({
        name: req.body.name,
        dosage: req.body.dosage
      }).then(function (dbOntrack) {
        res.json(dbOntrack);
      });
    });
  };


  function SaveDoctorNote() {

    app.post("/", function (req, res) {
      db.Ontrack.create({
        name: req.body.name,
        location: req.body.location
      }).then(function (dbOntrack) {
        res.json(dbOntrack);
      });
    });
  };


  function SaveMentalHealthNote() {

    app.post("/", function (req, res) {
      db.Ontrack.create({
        date: req.body.date,
        mood: req.body.mood,
        note: req.body.note
      }).then(function (dbOntrack) {
        res.json(dbOntrack);
      });
    });
  };


  function SaveExerciseNote() {

    app.post("/", function (req, res) {
      db.Ontrack.create({
        date: req.body.date,
        type: req.body.type,
        duration: req.body.duration
      }).then(function (dbOntrack) {
        res.json(dbOntrack);
      });
    });
  };


  function SaveFoodNote() {

    app.post("/", function (req, res) {
      db.Ontrack.create({
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
  };


  function SaveBloodPressureNote() {

    app.post("/", function (req, res) {
      db.Ontrack.create({
        date: req.body.name,
        systolic: req.body.systolic,
        diastolic: req.body.diastolic,
        pulse: req.body.pulse
      }).then(function (dbOntrack) {
        res.json(dbOntrack);
      });
    });
  };
};
