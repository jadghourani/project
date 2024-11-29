$(document).ready(function () {
    $("#booking-date").datepicker({
        dateFormat: "yy-mm-dd",
        minDate: 0,
    });

    let submitButton = $("form button[type='submit']");
    let popup = $("#popup");
    let closePopup = $("#close-popup");
    let form = $("form");
    let nameInput = form.find("input[type='text']");
    let emailInput = form.find("input[type='email']");
    let bookingDateInput = $("#booking-date");

    submitButton.on("click", function (event) {
        event.preventDefault();

        let nameValue = nameInput.val().trim();
        let emailValue = emailInput.val().trim();
        let bookingDateValue = bookingDateInput.val().trim();

        if (nameValue === "" || emailValue === "" || bookingDateValue === "") {
            alert("Please fill in Name, Email, and Booking Date before submitting.");
        } else {
            popup.fadeIn();
        }
    });

    closePopup.on("click", function () {
        popup.fadeOut();
        form[0].reset();
    });

    $(window).on("click", function (event) {
        if ($(event.target).is(popup)) {
            popup.fadeOut();
            form[0].reset();
        }
    });
});
