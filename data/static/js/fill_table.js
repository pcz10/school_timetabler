function create_classes_rows() {
    for(var i = 1; i <= 8; i++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(i.toString()));
    }
}
