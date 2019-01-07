$(document).ready(function () {

    showModalBox = function (close_id, modal_id) {
        // Get the modal
        var modal = document.getElementById(modal_id);

        // Get the button that opens the modal
        //var btn = document.getElementById(button_id);

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName(close_id)[0];

        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    }


});
