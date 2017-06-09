var container = document.querySelector('#container');
for (i = 0; i < formData.length; i++) {
  var control = formData[i];

  var inputElement = document.createElement('input');
  inputElement.id = control.id;
  inputElement.type = control.type;
  inputElement.placeholder = control.label;
  inputElement.icon = control.icon;

    if (control.type === "select") {
      inputElement.type === "select";
      var inputElement = document.createElement('select');
      inputElement.id = control.id;
      inputElement.type = control.type;
      inputElement.label = control.label;
      inputElement.icon = control.icon;
      var options = control.options;
      for (j = 0; j < options.length; j++) {
        var optionElement = document.createElement("option");
        optionElement.value = options[j].value;
        optionElement.innerHTML = options[j].label;
        inputElement.appendChild(optionElement)
    }
    } else if (control.type === "textarea") {
      inputElement.type === "textarea";
      var inputElement = document.createElement('textarea');
      inputElement.id = control.id;
      inputElement.type = control.type;
      inputElement.placeholder = control.label;
      inputElement.icon = control.icon;
    }

  container.appendChild(inputElement);
}
var footer = document.querySelector('#footer')
var submitBtn = document.createElement("input");
submitBtn.setAttribute('id','submitBtn');
submitBtn.setAttribute('type','button');
submitBtn.setAttribute('value','Submit Form');
submitBtn.setAttribute('width','20%');
submitBtn.setAttribute('background-color', 'cornflowerblue');
submitBtn.setAttribute('color','white');
footer.appendChild(submitBtn);
