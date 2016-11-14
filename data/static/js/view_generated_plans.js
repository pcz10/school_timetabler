function view_teachers_plan(classes) {
    var parsed_classes = JSON.parse(classes);
    var selected_day = document.getElementById("choose_day_teachers");
    var day_value = selected_day.options[selected_day.selectedIndex].value;
    for (i = 0; i < parsed_classes.length; i++) {
        var day = parsed_classes[i].fields.day;
        if (day == day_value){
            var subject = parsed_classes[i].fields.subject;
            var grade = parsed_classes[i].fields.grade;
            var room = parsed_classes[i].fields.room;
            document.getElementById(parsed_classes[i].fields.classes_number + "-" + parsed_classes[i].fields.teacher).innerHTML
            = "Przedmiot: " + subject + "<br>" + "Klasa: " + grade + "<br>" + "Sala: " + room ;
        }
    }
}

function view_grades_plan(classes) {
    var parsed_classes = JSON.parse(classes);
    var selected_day = document.getElementById("choose_day_grades");
    var day_value = selected_day.options[selected_day.selectedIndex].value;
    for (i = 0; i < parsed_classes.length; i++) {
        var day = parsed_classes[i].fields.day;
        if (day == day_value){
            var subject = parsed_classes[i].fields.subject;
            var teacher = parsed_classes[i].fields.teacher;
            var room = parsed_classes[i].fields.room;
            document.getElementById(parsed_classes[i].fields.classes_number + "-" + parsed_classes[i].fields.grade).innerHTML
            = "Przedmiot: " + subject + "<br>" + "Nauczyciel: " + teacher + "<br>" + "Sala: " + room;
        }
    }
}

function clear_table(table_id){
    $("#"+table_id+" td").html("")
}

function printTable(table_id)
{
   var divToPrint=document.getElementById(table_id);
   newWin= window.open("");
   newWin.document.write(divToPrint.outerH TML);
   newWin.print();
   newWin.close();
}
