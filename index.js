
var data;
var tableMain =  document.getElementById("tableMain");


document.getElementById("form")
    .addEventListener("submit", function(event) {
        event.preventDefault();
        data = new FormData(event.target);

        const params = new URLSearchParams([...data.entries()]);

        fetch(
            "https://wt.ops.labs.vu.nl/api23/b5d269fe", {
                method: 'POST',
                body: params,
            }
        )
        .then(response => response.json())
        .then(data => {

            fetch("https://wt.ops.labs.vu.nl/api23/b5d269fe/item/" + data.id)
                .then(response => response.json())
                .then((data) => {
                    data.forEach(d => {
                        addTableRow(d.alt, d.author, d.description, d.image, d.tags);
                    }
                    )
                });
        })
    });





function addTableRow(alt, author, description, image, tags) {
    var tr = document.createElement("tr");

    /// img
    var td = document.createElement("td");
    var img = document.createElement("img");

    img.setAttribute("src", image);
    img.setAttribute("width", 232);

    td.appendChild(img);
    tr.appendChild(td);


    /// author
    var td = document.createElement("td");
    var h2 = document.createElement("h2");
    var _author = document.createTextNode(author);
    h2.append(_author);
    td.appendChild(h2);
    tr.appendChild(td);


    // tags
    var td = document.createElement("td");
    var newContent = document.createTextNode(tags);
    td.appendChild(newContent);
    tr.appendChild(td);


    // alt
    var td = document.createElement("td");
    var newContent = document.createTextNode(alt);
    td.appendChild(newContent);
    tr.appendChild(td);


    // description
    var td = document.createElement("td");
    var p = document.createElement("p");
    p.setAttribute("class", "description");
    var newContent = document.createTextNode(description);
    p.appendChild(newContent);
    tr.appendChild(p);

    tableMain.appendChild(tr);
}



fetch('https://wt.ops.labs.vu.nl/api23/b5d269fe')
  .then(response => response.json())
  .then((data) => {
    data.forEach(d => {
        addTableRow(d.alt, d.author, d.description, d.image, d.tags);
    }
    )
  });


document.getElementById("reset_button")
    .addEventListener("click", function(event) {
        console.log("araba");
        fetch('https://wt.ops.labs.vu.nl/api23/b5d269fe/reset')
    })

