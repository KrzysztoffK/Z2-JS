function functionOne(){
    let list = document.querySelectorAll("#zad1 li");
    let hidden = document.querySelectorAll(".hidden");
    let interests = [];
    for (let i = 0; i < list.length; i++){
        let message = prompt(`Podaj swoje zainteresowania (${i+1}/${list.length}):`);
        interests.push(message);
    }
    console.log(list.length);
    for (let i = 0; i < interests.length; i++){
        list[i].innerHTML = interests[i];
    }
    for (let i = 0; i < hidden.length; i++){
        hidden[i].style.visibility = "visible";
    }

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
        $(this).css("color", "red").delay(5000).fadeIn(2000);
    });

}
