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