var classes_holder = []; //TODO wyczyscic po dodaniu do bazy NIE ZAPOMNIJ
var unavailable_teachers_per_classes_number_holder =
    {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], '8': [], '9': []};

function validate_params(){
    var selected_teacher = document.getElementById("choose_teacher");
    var selected_class_number = document.getElementById("choose_classes_number");
    var students_amount_value = document.getElementById("students_amount");
    var classroom_capacity = document.getElementById("classroom_capacity");
    var teacher_value = selected_teacher.options[selected_teacher.selectedIndex].value;
    var class_number_value = selected_class_number.options[selected_class_number.selectedIndex].value;

    if (classroom_capacity < students_amount_value) {
        $('#accept_classes_button').attr('disabled', true);
    } else {
        $('#accept_classes_button').attr('disabled', false);
    }
    if ($.inArray(teacher_value, unavailable_teachers_per_classes_number_holder[class_number_value]) > -1) {
        $('#accept_classes_button').attr('disabled', true);
    } else {
        $('#accept_classes_button').attr('disabled', false);
    }
}

function add_classes() {
    var selected_class = document.getElementById("choose_class");
    var selected_class_number = document.getElementById("choose_classes_number");
    var selected_room = document.getElementById("choose_room");
    var selected_teacher = document.getElementById("choose_teacher");
    var selected_subject = document.getElementById("choose_subject");
    var selected_day = document.getElementById("choose_day");

    var class_value = selected_class.options[selected_class.selectedIndex].value;
    var class_number_value = selected_class_number.options[selected_class_number.selectedIndex].value;
    var room_value = selected_room.options[selected_room.selectedIndex].value;
    var teacher_value = selected_teacher.options[selected_teacher.selectedIndex].value;
    var subject_value = selected_subject.options[selected_subject.selectedIndex].value;
    var day_value = selected_day.options[selected_day.selectedIndex].value;

    var classes_obj = {day: day_value, teacher: teacher_value, subject: subject_value, room: room_value,
        class: class_value, class_number: class_number_value};


    if(classes_holder.length == 0) {
        classes_holder.push(classes_obj);
        document.getElementById(class_number_value + "-" + class_value).innerHTML = teacher_value + "\n" + subject_value +
            "\nsala: " + room_value;
        unavailable_teachers_per_classes_number_holder[class_number_value].push(teacher_value);
    } else {
        var last_item = classes_holder[classes_holder.length - 1];

        if (classes_obj.class_number == last_item.class_number && classes_obj.room == last_item.room ) {
            $('#accept_classes_button').attr('disabled', true);
        }
        else {
            $('#accept_classes_button').attr('disabled', false);
            classes_holder.push(classes_obj);
            unavailable_teachers_per_classes_number_holder[class_number_value].push(teacher_value);
            document.getElementById(class_number_value + "-" + class_value).innerHTML = teacher_value + "\n" + subject_value +
                "\nsala: " + room_value
        }
    }
}
