// Variabel firstName dengan nilai "rizwar"
var firstName = "rizwar";

// Variabel lastName dengan nilai "abdi"
var lastName = "abdi";

// Variabel age dengan nilai 30
var age = 30;

// Variabel isMarried dengan nilai true
var isMarried = true;

// Pengujian dengan console.log()
console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("age:", age);
console.log("isMarried:", isMarried);

// Pengujian dengan innerHTML
document.getElementById("output").innerHTML = `
    <p>First Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Age: ${age}</p>
    <p>Married: ${isMarried ? "Yes" : "No"}</p>
`;
