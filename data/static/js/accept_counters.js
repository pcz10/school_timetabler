function add_counter(subjects) {
    var parsed_subjects = JSON.parse(subjects);
    var grade_selected = document.getElementById("choosed_class_counter");
    var grade = grade_selected.options[grade_selected.selectedIndex].value;
    for (i = 0; i < parsed_subjects.length; i++) {
        var subject = parsed_subjects[i].fields.name;
        document.getElementById(subject + "-" + grade).innerHTML = document.getElementById(subject + "_hours_per_week").value;
    }
}
