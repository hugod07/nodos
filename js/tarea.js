alet seccion=document.getElementsByTagName('section');
console.log(seccion[2].innerText);
let etiqueta=document.getElementsByTagName("ul");
console.log(etiqueta[0].innerText);
function agregar(){
    var genero=document.getElementById('lista').value
    let listado,lista, contenido
    listado=document.getElementsByTagName('li');
    lista=document.createElement('li');
    contenido=document.createTextNode(genero);
    lista.appendChild(contenido);
    listado[2].insertAdjacentElement('afterend',lista);
}
var borrar
borrar=document.getElementById('pie');
borrar.innerHTML="@hugo";
let elemento, contenido;
elemento=document.createElement("img");
contenido=document.createTextNode("eliminar")
elemento.appendChild(contenido);
seccion[2].replaceChild(elemento,etiqueta[1]); 
let parrafo, parrafo2;
parrafo=document.createElement("img");
parrafo.setAttribute('class','nuevo');
parrafo2=document.createTextNode("Nodo nuevo");
parrafo.appendChild(parrafo2);
seccion[1].insertAdjacentElement('afterend',parrafo)
console.log(parrafo.innerText)
//
seccionNueva=document.createElement('section');
  encabezado=document.createElement('h1');
  encabezado.setAttribute('class','encabezado');
  contenido=document.createTextNode("insertar Imágenes desde JS");
  encabezado.appendChild(contenido);

  articulo1=document.createElement('article');
  imagen=document.createElement('img');
  imagen.setAttribute('src', 'img/instagram.jpeg');
  articulo1.appendChild(imagen);


  
  articulo2=document.createElement('article');
  imagen2=document.createElement('img');
  imagen2.setAttribute('src', 'img/facebook.jpeg');
  articulo2.appendChild(imagen2);

  seccionNueva.appendChild(encabezado);
  seccionNueva.appendChild(articulo1);
  seccionNueva.appendChild(articulo2);
  seccion[3].insertAdjacentElement('afterend',seccionNueva);

