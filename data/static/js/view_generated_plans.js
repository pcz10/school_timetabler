function view_teachers_plan(classes) {
    var parsed_classes = JSON.parse(classes);
    for (i = 0; i < parsed_classes.length; i++) { //TODO ZNALEZC SPOSOB JAK WYSWIETLAC DZIEN
        var subject = parsed_classes[i].fields.subject;
        var grade = parsed_classes[i].fields.grade;
        var room = parsed_classes[i].fields.room;
        var day = parsed_classes[i].fields.day;
        document.getElementById(parsed_classes[i].fields.classes_number + "-" + parsed_classes[i].fields.teacher).innerHTML
            = subject + " KLASA: " + grade + " SALA: " + room ;
    }
}