var classes_holder = []; //TODO wyczyscic po dodaniu do bazy NIE ZAPOMNIJ
var actual_students_amount;
var actual_classroom_capacity;
var unavailable_teachers_per_classes_number_holder =
    {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], '8': [], '9': []};
var unavailable_classrooms_per_classes_number_holder =
    {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], '8': [], '9': []};


function validate_available_classrooms(classroom, unavailable_classrooms_per_classes_number_holder, class_number_value) {
    if ($.inArray(classroom, unavailable_classrooms_per_classes_number_holder[class_number_value]) > -1) {
        $('#accept_classes_button').attr('disabled', true);
    } else {
        $('#accept_classes_button').attr('disabled', false);
    }
}

function validate_available_teachers(teacher_value, unavailable_teachers_per_classes_number_holder, class_number_value) {
    if ($.inArray(teacher_value, unavailable_teachers_per_classes_number_holder[class_number_value]) > -1) {
        $('#accept_classes_button').attr('disabled', true);
    } else {
        $('#accept_classes_button').attr('disabled', false);
    }
}

function validate_classroom_capacity(classroom_capacity, students_amount) {
    if (classroom_capacity) {
        actual_classroom_capacity = classroom_capacity;
    }
    if (students_amount) {
        actual_students_amount = students_amount;
    }
    if (!students_amount && !classroom_capacity) {
        $('#accept_classes_button').attr('disabled', true);
    }
    if (actual_classroom_capacity < actual_students_amount) {
        $('#accept_classes_button').attr('disabled', true);
    } else {
        $('#accept_classes_button').attr('disabled', false);
    }
}

function validate_params(){
    var selected_teacher = document.getElementById("choose_teacher");
    var selected_class_number = document.getElementById("choose_classes_number");
    var students_amount_value = document.getElementById("students_amount").textContent;
    var classroom_capacity = $('#classroom_capacity').html();
    var selected_room = document.getElementById("choose_room");
    var room_value = selected_room.options[selected_room.selectedIndex].value;
    var teacher_value = selected_teacher.options[selected_teacher.selectedIndex].value;
    var class_number_value = selected_class_number.options[selected_class_number.selectedIndex].value;
    console.log('classroom_capacity   ' + classroom_capacity);
    console.log('students_amount_value   ' + students_amount_value);
    validate_available_teachers(teacher_value, unavailable_teachers_per_classes_number_holder, class_number_value);
    validate_available_classrooms(room_value, unavailable_classrooms_per_classes_number_holder, class_number_value);
}

function decrease_counters(subject, grade) {
    if(document.getElementById(subject + "-" + grade).innerHTML > 0) {
        var decrease = document.getElementById(subject + "-" + grade).innerHTML - 1;
        document.getElementById(subject + "-" + grade).innerHTML = decrease.toString();
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
        decrease_counters(subject_value, class_value);
        unavailable_teachers_per_classes_number_holder[class_number_value].push(teacher_value);
        unavailable_classrooms_per_classes_number_holder[class_number_value].push(room_value);
    } else {
        var last_item = classes_holder[classes_holder.length - 1];

        if (classes_obj.class_number == last_item.class_number && classes_obj.room == last_item.room ) {
            $('#accept_classes_button').attr('disabled', true);
        }
        else {
            $('#accept_classes_button').attr('disabled', false);
            classes_holder.push(classes_obj);
            unavailable_teachers_per_classes_number_holder[class_number_value].push(teacher_value);
            unavailable_classrooms_per_classes_number_holder[class_number_value].push(room_value);
            document.getElementById(class_number_value + "-" + class_value).innerHTML = teacher_value + "\n" + subject_value +
                "\nsala: " + room_value;
            decrease_counters(subject_value, class_value);
        }
    }
}
