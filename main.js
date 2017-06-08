var container = document.querySelector('#container');
for (i = 0; i < formData.length; i++) {
  var control = formData[i];

  var inputElement = document.createElement('input');
  inputElement.id = control.id;
  inputElement.type = control.type;
  inputElement.label = control.label;
  inputElement.icon = control.icon;

  if (control.type === "select") {
    inputElement.type === "select";
    var inputElement = document.createElement('select');
    inputElement.id = control.id;
    inputElement.type = control.type;
    inputElement.label = control.label;
    inputElement.icon = control.icon;
    // for (j = 0; j < control.options.length; j++){
    //   inputElement.option[j] = control.option[j];
    // }
  } else if (control.type === "textarea") {
    inputElement.type === "textarea";
    var inputElement = document.createElement('textarea');
    inputElement.id = control.id;
    inputElement.type = control.type;
    inputElement.label = control.label;
    inputElement.icon = control.icon;
  }

  container.appendChild(inputElement);
}
