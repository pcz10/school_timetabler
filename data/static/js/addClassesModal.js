$(function backdropTrue() {
    $(document).ready(function () {
        $("#add_classes_button").click(function () {
            $("#add_classes_modal").modal({backdrop: true});
        });
    });
});
