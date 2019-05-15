$(document).ready(function () {
    UpdateOnScreenControls();
    $("#saveToServer").on("click", SaveToServer);
    $("#selectEntryType").on("change", UpdateOnScreenControls);
});

function UpdateOnScreenControls() {
    HideAllContainers();

    switch ($("#selectEntryType").val()) {
        case "rx": $("#prescriptionInputs").show(); break;
        case "md": $("#doctorsNotesInputs").show(); break;
        case "mh": $("#mentalHealthNotesInputs").show(); break;
        case "ex": $("#exerciseNotesInputs").show(); break;
        case "fd": $("#foodNotesInputs").show(); break;
        case "bp": $("#bloodPressureNotesInputs").show(); break;
        default: alert("hey now we had a weird value" + $("#selectEntryType").val()); break;
    }
};

function HideAllContainers() {
    $("#prescriptionInputs").hide();
    $("#doctorsNotesInputs").hide();
    $("#mentalHealthNotesInputs").hide();
    $("#exerciseNotesInputs").hide();
    $("#foodNotesInputs").hide();
    $("#bloodPressureNotesInputs").hide();
};

function SaveToServer() {
    switch ($("#selectEntryType").val()) {
        case "rx": SavePrescription(); break;
        case "md": SaveDoctorNote(); break;
        case "mh": SaveMentalHealthNote(); break;
        case "ex": SaveExerciseNote(); break;
        case "fd": SaveFoodNote(); break;
        case "bp": SaveBloodPressureNote(); break;
        default: alert("not sure what to save?!!?!?!" + $("#selectEntryType").val()); break;
    }
};

function SavePrescription() {
    var postArgs = {
        method: "POST",
        url: "/api/prescriptions",
        data: {
            name: $("#rxName").val(),
            dosage: $("#rxDose").val()
        }
    };

    $.ajax(postArgs)
        .then(function () { alert("Record added!"); })
        .fail(function () { alert("Something went wrong, please try adding again."); });
};


function SaveDoctorNote() {
    var postArgs = {
        method: "POST",
        url: "/api/doctors",
        data: {
            name: $("#mdName").val(),
            location: $("#mdLocation").val()
        }
    };

    $.ajax(postArgs)
        .then(function () { alert("Record added!"); })
        .fail(function () { alert("Something went wrong, please try adding again."); });
};


function SaveMentalHealthNote() {
    var postArgs = {
        method: "POST",
        url: "/api/mhnotes",
        data: {
            date: $("#mhDate").val(),
            mood: $("#currentMood").val(),
            note: $("#mhNote").val()
        }
    };
    $.ajax(postArgs)
        .then(function () { alert("Record added!"); })
        .fail(function () { alert("Something went wrong, please try adding again."); });
};


function SaveExerciseNote() {
    var postArgs = {
        method: "POST",
        url: "/api/exercises",
        data: {
            date: $("#exerciseDate").val(),
            type: $("#exerciseType").val(),
            duration: $("#exerciseDuration").val()
        }
    };
    $.ajax(postArgs)
        .then(function () { alert("Record added!"); })
        .fail(function () { alert("Something went wrong, please try adding again."); });
};


function SaveFoodNote() {
    var postArgs = {
        method: "POST",
        url: "/api/foods",
        data: {
            date: $("#foodDate").val(),
            meal: $("#mealType").val(),
            name: $("#foodName").val(),
            calorie: $("#foodCal").val(),
            sugar: $("#foodSug").val(),
            sodium: $("#foodSalt").val()
        }
    };
    $.ajax(postArgs)
        .then(function () { alert("Record added!"); })
        .fail(function () { alert("Something went wrong, please try adding again."); });
};


function SaveBloodPressureNote() {
    var postArgs = {
        method: "POST",
        url: "/api/bps",
        data: {
            date: $("#bpDate").val(),
            systolic: $("#bpSystolic").val(),
            diastolic: $("#bpDiastolic").val(),
            pulse: $("#bpPulse").val()
        }
    };
    $.ajax(postArgs)
        .then(function () { alert("Record added!"); })
        .fail(function () { alert("Something went wrong, please try adding again."); });
};