console.log("-------------Question 3---------------")
// On click practice
// Make a new HTML page with a button which changes the title of the page
// Include a heading and subheadings with paragraphs add buttons to change and add elements to the page add a button to remove an entire subheading and its text from the page

function changeText(clickIndex) {
    document.getElementById(clickIndex).innerText = new Date();
}

function removeInfo(noInfo) {
    document.getElementById(noInfo).remove ();
}

function addMe(moreInfo) {
    const divElement = document.createElement("div");
    divElement.innerText = "Hi, how are you today?"
    document.getElementById(moreInfo).appendChild(divElement);
}
