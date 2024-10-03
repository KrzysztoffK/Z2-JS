function functionOne(){
    const inputLength = 5;
    let list = document.querySelector("#list");
    let hidden = document.querySelector("#hidden");
    let listTemplate = "<ol id=\"zad1\">";
    let interests = [];
    //Push user input as elements of the array
    for (let i = 0; i < inputLength; i++){
        let message = prompt(`Podaj swoje zainteresowania (${i+1}/${inputLength}):`);
        interests.push(message);
    }
    //Create list elements and concatenate elements of interests array
    for (let i = 0; i < interests.length; i++){
        listTemplate += "<li>" + interests[i] + "</li>";
    }
    //Create list in HTML document and set title paragraph as visible
    listTemplate += "</ol>";
    list.innerHTML = listTemplate;
    hidden.style.visibility = "visible";

}

function functionTwo(){
    let input = document.querySelector("input#zad3").value;
    let paragraph = document.querySelector("p#zad3");
    paragraph.style.fontFamily = "Comic Sans MS";
    paragraph.style.textAlign = "center";
    paragraph.style.color = "green";
    paragraph.style.fontWeight = "bold";
    paragraph.innerHTML = input;
}

function functionThree(){
    $("button#3").fadeOut(2000, function() {
        $(this).css({"color": "red", "background-color": "yellow"}).delay(5000).fadeIn(2000);
    });

}
