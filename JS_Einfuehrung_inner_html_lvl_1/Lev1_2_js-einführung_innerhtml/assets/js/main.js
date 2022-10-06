/*Verwende den HTML-Code aus dem Kommentarbereich.

Erstelle mit document.getElementById(“info”).innerHTML eine h1 mit dem Text “Hello World”.
Füge noch eine h2 hinzu mit dem Text “How are you?”.

Sieh’ dir das Ergebnis über den Live Server an.

*/


let hello = document.getElementById("info")
hello.innerHTML = "<h1>Hello World</h1><h2>How are you</h2>"


let start = document.getElementById("container")
start.innerHTML = "<p>start of the element</p>"

document.write("end of the element")








