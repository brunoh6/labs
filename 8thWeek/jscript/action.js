function clearInputField() {
    document.getElementById("sending").reset();
}

function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(first)) {
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Correct input";
        return true;
    } else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Please, enter 2-15 characters";
        return false;
    }
}

function checkLast() {
    var last = document.getElementById("last").value;
    var regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(last)) {
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Correct input";
        return true;
    } else {
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Please, enter 2-20 characters";
        return false;
    }
}

function checkDest() {
    var dest = document.getElementById("dest").value;
    var regex = /^[a-zA-Z\s.,\d ]{5,50}$/;

    if (regex.test(dest)) {
        document.getElementById("dest_Check").style.color = "green";
        document.getElementById("dest_Check").innerHTML = "Correct input";
        return true;
    } else {
        document.getElementById("dest_Check").style.color = "red";
        document.getElementById("dest_Check").innerHTML = "Please, enter 5-50 characters";
        return false;
    }
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Correct input";
        return true;
    } else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Invalid input";
        return false;
    }
}

function outputData() {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var dest = document.getElementById("dest").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var dateAndTime = date + " at " + time;
    var quantity = document.getElementById("quantity").value;
    var paymethod = document.getElementById("paymethod").value;

    if (first !== "" && last !== "" && dest !== "" && phone !== "" && date !== "" && time !== "" && quantity !== "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Hello, " + first + " " + last + "!";
        document.getElementById("summary").innerHTML += "<p>Your order was successfully placed. We will contact you as soon as possible. You can see the details of your order down below: </p>";
        document.getElementById("summary").innerHTML += "<p>Phone Number: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Destination: " + dest + ".</br>";
        document.getElementById("summary").innerHTML += "Date and Time: " + dateAndTime + ".</br>";
        document.getElementById("summary").innerHTML += "Number of People: " + quantity + ".</br>";
        document.getElementById("summary").innerHTML += "Payment Method: " + paymethod + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>We are glad that You use our company's services :) </p>";
    } else {
        document.getElementById("summary").style.color = "red";
        document.getElementById("summary").innerHTML = "Please, fill in all the fields";
    }

    const text = document.getElementById("hidden");
    text.style.display = "block";
}
