function saludar(nombre, apellido = "payaso") {
  let div = document.getElementById("mensaje");

  // if (nombre == "No esta mi nombre" || nombre == "no esta mi nombre") {
  //   div.textContent = ` Jajaja que ${apellido}`;
  // } else {
  //   div.textContent = ` Hola pinchi ${apellido} ${nombre}`;
  // }
  if (nombre == "Escribe aqui... viejo baboso") {
    return (div.textContent = `Chistosito`);
  }
  nombre == "No esta mi nombre" || nombre == "no esta mi nombre"
    ? (div.textContent = ` Jajaja que ${apellido}`)
    : (div.textContent = ` Hola ${apellido} ${nombre}`);

  // div.innerText += " Hola1 " + nombre + " " + apellido;
  // div.innerHTML = "<br><br> Hola3 " + nombre + " " + apellido;
  // alert(`Hola payaso ${apellido} ${nombre}`);

  // let table = document.querySelector("#tabla tbody");
  let table2 = document.querySelector("#tabla");

  // const row = document.createElement("tr");

  // FORMA 1
  // const row2 = document.createElement("td");
  // const row3 = document.createElement("td");

  // let mensajeText1 = document.createTextNode(nombre);
  // let mensajeText2 = document.createTextNode(apellido);

  // row2.appendChild(mensajeText1);
  // row3.appendChild(mensajeText2);

  // row.appendChild(row2);
  // row.appendChild(row3);
  // FORMA 1

  // FORMA 2
  // row.innerHTML = `<td> ${nombre} </td>
  //                  <td> ${apellido} </td>`;
  // FORMA 2

  // table.appendChild(row);
  // table.insertAdjacentElement("beforeend", row);

  // FORMA 3
  let tablaRow = table2.insertRow(-1);

  let celda = tablaRow.insertCell(0);
  celda.textContent = `${nombre}`;

  // celda = tablaRow.insertCell(1);
  // celda.textContent = `No sé`;
  // FORMA 3
}

//EVENTO A LOS BOTONES QUE TENGAN LA CLASE BOTON...
const boton = document.querySelectorAll(".botonSaludar");
boton.forEach((bton) => {
  bton.addEventListener("click", (e) => {
    // console.log(e.target.name);
    let nombre = e.target.value;
    saludar(nombre);
  });
});

// let table = document.querySelector("#tabla tbody");

// const row = document.createElement("tr");
// row.innerHTML = `<td> ${nombre}`;

const formAgregar = document.getElementById("formAgregar");

formAgregar.addEventListener("submit", (e) => {
  e.preventDefault();
  let formDataElement = new FormData(e.target);
  let inputPalabras = formDataElement.get("inputAgregar");
  if (!inputPalabras) {
    document.getElementById("mensaje").textContent = "Primero escribe, baboso!";
    document.getElementById("inputAgregar").value =
      "Escribe aqui... viejo baboso";
  } else {
    // let inputPalabras = formAgregar.querySelector("#inputAgregar").value;
    saludar(inputPalabras);
    document.getElementById("inputAgregar").value = "";
  }
});
