var classes_holder = []


function validate(students_amount, classroom_capacity) {

    console.log('students_amount ' + students_amount);


   //if (classroom_capacity < students_per_class) {
   //    $('#accept_classes_button').addClass('disabled');
   //    $('#accept_classes_button').removeAttr('data-toggle');
   //} else {
   //    $('#accept_classes_button').removeClass('disabled');
   //    $('#accept_classes_button').attr("data-toggle", "modal");
   //}
}

function add_classes() {

    var selected_class = document.getElementById("choose_class");
    var selected_class_number = document.getElementById("choose_classes_number");
    var selected_room = document.getElementById("choose_room");
    var selected_teacher = document.getElementById("choose_teacher");
    var selected_subject = document.getElementById("choose_subject");
    var selected_day = document.getElementById("choose_day");

    var class_value = selected_class.options[selected_class.selectedIndex].value; // klasa
    var class_number_value = selected_class_number.options[selected_class_number.selectedIndex].value; //godzina lekc
    var room_value = selected_room.options[selected_room.selectedIndex].value; // sala
    var teacher_value = selected_teacher.options[selected_teacher.selectedIndex].value;
    var subject_value = selected_subject.options[selected_subject.selectedIndex].value;
    var day_value = selected_day.options[selected_day.selectedIndex].value;

    var classes_obj = {day: day_value, teacher: teacher_value, subject: subject_value, room: room_value, class: class_value,
        class_number: class_number_value};

    classes_holder.push(classes_obj);

    document.getElementById(class_number_value + "-" + class_value).innerHTML = teacher_value + "\n" + subject_value +
        "\nsala: " + room_value
}
