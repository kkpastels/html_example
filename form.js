const form = document.getElementById("item-form");
// case 1: simply form submit
function onSumbit(e) {
    e.preventDefault();
    const item = document.getElementById("item-input").Value;
    const priority = document.getElementById("priority-input").value;
    if (item === "" || priority === "0") {
        alert("Please fill out the form");
        return;
    }
    console.log(item, priority);
}
// form.addEventListener("submit", onSumbit);

// case using formData object
function onSumbit2(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const item = formData.get("item");
    const priority = formData.get("priority");
    console.log(item, priority);
    const entries = formData.entries(); 
    console.log(entries);
    for (let entry of entries) {
        console.log(entry[1]);
    }
}
form.addEventListener("submit", onSumbit2);