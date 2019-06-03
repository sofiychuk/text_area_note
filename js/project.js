window.onload = function () {

    var div = document.getElementById('div-active');
    var textArea = document.getElementById('textarea-active');
    var divRooles = document.getElementById('div-rooles');
    
    document.onkeydown = function (e) {
        if (e.ctrlKey && e.keyCode == 69) {
            showTextArea();
            return false;
        }
        if (e.ctrlKey && e.keyCode == 83) {
            saveTextArea();
            return false;
        }
        if (e.keyCode == 27) {
            cancelTextArea();
            return false;
        }
    }

    function showTextArea() {
        textArea.classList.toggle("hidden");
        div.classList.toggle("hidden");
        divRooles.classList.toggle("hidden");
        divRooles.innerHTML = "";
        textArea.value = div.innerHTML;
        textArea.focus();
    }

    function saveTextArea() {
        textArea.classList.toggle("hidden");
        div.classList.toggle("hidden");
        div.innerHTML = textArea.value;
    }

    function cancelTextArea() {
        div.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
        textArea.value = "";
        div.innerHTML = "";
    }
}