let SubmitButton = document.getElementById("onclick");

SubmitButton.addEventListener("on-click", submit);

function submit() {
    let NameElement = document.getElementById("Name").value;
    let AgeElement = document.getElementById("Age").value;
    let EmailElement = document.getElementById("E-mail").value;

    let EmailPattern = /^[\w\.-]+@\w+(\.\w+)+$/;

    if (EmailPattern.test(EmailElement)) {
        console.log("Valid E-mail format:", EmailElement);
    } else {
        console.log("Invalid E-mail format:", EmailElement);
    }

    console.log(“Name value:”NameElement);
    console.log(“Age value:”AgeElement);
}

