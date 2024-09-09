let SubmitButton = document.getElementById("onclick");

SubmitButton.addEventListener("on-click", submit);

function submit() {
    let NameElement = document.getElementById("Name").value;
    let AgeElement = document.getElementById("Age").value;
    let CpfElement = document.getElementById("Cpf").value;
    let EmailElement = document.getElementById("E-mail").value;

    console.log("Name value:", NameElement);
    console.log("Cpf value:", CpfElement);
    console.log("Age value:", AgeElement);
    console.log("E-mail value:", EmailElement);
}

function validate(NameElement, AgeElement, CpfElement, EmailElement, ){
    let BasicPattern = /[a-zA-Z]/;
    let CpfPattern = /^[\d.-]+$/;
    let EmailPattern = /^[\w.-]+@\w+(\.\w+)+$/;

    if (BasicPattern.test(NameElement)) {
        console.log("Valid Name format:", NameElement);
    }
    if (!BasicPattern.test(AgeElement)) {
        console.log("Valid Age format:", AgeElement);
    }
    if (CpfPattern.test(CpfElement)) {

        console.log("Valid Cpf format:", CpfPattern);
    }
    if (EmailPattern.test(EmailElement)) {
        console.log("Valid E-mail format:", EmailElement);
    }

}
