var classes_holder = [];
var actual_students_amount;
var actual_classroom_capacity;
var unavailable_teachers_per_classes_number_holder =
    {'1': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
       '2': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
        '3': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
         '4': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
          '5': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
           '6': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
            '7': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
             '8': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
              '9': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []}
    };
var unavailable_classrooms_per_classes_number_holder =
    {'1': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
       '2': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
        '3': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
         '4': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
          '5': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
           '6': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
            '7': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
             '8': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []},
              '9': {'Poniedziałek': [], 'Wtorek': [], 'Środa': [], 'Czwartek': [], 'Piątek': []}
    };

function validate_available_classrooms(classroom, unavailable_classrooms_per_classes_number_holder,
                                           day_value ,class_number_value) {
    var control_check = $.inArray(classroom, unavailable_classrooms_per_classes_number_holder[class_number_value][day_value]);
    if (control_check > -1) {
        return false;
    }
    else {
        return true;
    }
}

function validate_available_teachers(teacher_value, unavailable_teachers_per_classes_number_holder,
                                         day_value, class_number_value) {
    var control_check = $.inArray(teacher_value, unavailable_teachers_per_classes_number_holder[class_number_value][day_value]);
    if (control_check > -1) {
        return false;
    }
    else {
        return true;
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
        return false;
    }
    else {
        return true;
    }
}

function validate_params(classroom_capacity, students_amount){
    var selected_day = document.getElementById("choose_day");
    var day_value = selected_day.options[selected_day.selectedIndex].value;
    var selected_teacher = document.getElementById("choose_teacher");
    var selected_class_number = document.getElementById("choose_classes_number");
    var selected_room = document.getElementById("choose_room");
    var room_value = selected_room.options[selected_room.selectedIndex].value;
    var teacher_value = selected_teacher.options[selected_teacher.selectedIndex].value;
    var class_number_value = selected_class_number.options[selected_class_number.selectedIndex].value;
    if( validate_classroom_capacity(classroom_capacity, students_amount) &&
            validate_available_teachers(teacher_value, unavailable_teachers_per_classes_number_holder, day_value, class_number_value) &&
                validate_available_classrooms(room_value, unavailable_classrooms_per_classes_number_holder, day_value, class_number_value)) {
        $("#accept_classes_button").attr('disabled', false);
    }
    else {
        $("#accept_classes_button").attr('disabled', true);
    }
}

function decrease_counters(subject, grade) {
    if(document.getElementById(subject + "-" + grade).innerHTML > 0) {
        var decrease = document.getElementById(subject + "-" + grade).innerHTML - 1;
        document.getElementById(subject + "-" + grade).innerHTML = decrease.toString();
    }
}

function display_actual_classes(table_id){
    $("#"+table_id+" td").html("");
    var selected_day = document.getElementById("choose_day");
    var day_value = selected_day.options[selected_day.selectedIndex].value;
    for (i = 0; i < classes_holder.length; i++) {
        var day = classes_holder[i].day;
        if (day == day_value){
            var subject = classes_holder[i].subject;
            var teacher = classes_holder[i].teacher;
            var room = classes_holder[i].room;
            document.getElementById(classes_holder[i].classes_number + "-" + classes_holder[i].class).innerHTML =
                "Nauczyciel: " + teacher + "<br>" + "Przedmiot: " + subject + "<br>" + "Sala: " + room;
        }
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
        class: class_value, classes_number: class_number_value};


    if(classes_holder.length == 0) {
        classes_holder.push(classes_obj);
            document.getElementById(class_number_value + "-" + class_value).innerHTML =
                "Nauczyciel: " + teacher_value + "<br>" + "Przedmiot: " + subject_value + "<br>" + "Sala: " + room_value;
        decrease_counters(subject_value, class_value);
            unavailable_teachers_per_classes_number_holder[class_number_value][day_value].push(teacher_value);
            unavailable_classrooms_per_classes_number_holder[class_number_value][day_value].push(room_value);
    } else {
        var last_item = classes_holder[classes_holder.length - 1];

        if (classes_obj.classes_number == last_item.classes_number && classes_obj.room == last_item.room ) {
            $('#accept_classes_button').attr('disabled', true);
        }
        else {
            $('#accept_classes_button').attr('disabled', false);
            classes_holder.push(classes_obj);
            unavailable_teachers_per_classes_number_holder[class_number_value][day_value].push(teacher_value);
            unavailable_classrooms_per_classes_number_holder[class_number_value][day_value].push(room_value);
            document.getElementById(class_number_value + "-" + class_value).innerHTML =
                "Nauczyciel: " + teacher_value + "<br>" + "Przedmiot: " + subject_value + "<br>" + "Sala: " + room_value;
            decrease_counters(subject_value, class_value);
        }
    }
}

function post_classes() {
    for(i = 0; i < classes_holder.length; i++) {
        var classes = {
            grade: classes_holder[i].class,
            classes_number: classes_holder[i].classes_number,
            day: classes_holder[i].day,
            room: classes_holder[i].room,
            subject: classes_holder[i].subject,
            teacher: classes_holder[i].teacher
        };

        $.ajax({
            type: 'POST',
            url: '/timetable',
            data: classes,
        })
    }
    classes_holder = [];
}

function getCookie(name) {
    var cookieValue = null;
    var i = 0;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (i; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    crossDomain: false, // obviates need for sameOrigin test
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type)) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});






























