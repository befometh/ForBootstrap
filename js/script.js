function validateForm() {
    var inputText = document.getElementById("nick").value;
    var regex = /["']/g; // expresión regular para buscar comillas simples o dobles
    if (regex.test(inputText)) {
      inputText = inputText.replace(regex, "\\$&"); // reemplazar las comillas con una barra invertida
      document.getElementById("nick").value = inputText; // actualizar el valor del campo de texto
    }
    return true; // permitir que el formulario se envíe al servidor
  }
