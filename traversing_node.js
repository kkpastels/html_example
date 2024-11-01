let output;

const parent = document.querySelector(".items");
console.log(parent);
output = parent.childNodes;
output = parent.childNodes[0];
// textContent will shown display words only
output = parent.childNodes[3].textContent;
// outerHTML will shown the whole code wordings
output = parent.childNodes[3].outerHTML = "<!-- comment -->";
// replaced wording
output = parent.childNodes[3].innerText = "hello" ;
output = parent.childNodes[1].style.color = "red";
output = parent.childNodes[3].nextSibling.nextSibling;
// output = parent.childNodes[3].nextSibling.parentNode;
output = parent.childNodes;
output.forEach((element)=> {
    console.log(element);
});
console.log(output);