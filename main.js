function ValidateForm(){
    let name = document.getElementById('inputName').value;
    let date = document.getElementById('inputDate').value;
    let number = document.getElementById('inputNumber').value;
   
    if (name == ""){
       alert('El campo nombre es requerido');
       return false;
    
    }
    if (date == ""){
       alert('El campo Fecha y hora es requerido');
       return false;
   }
     
   
   if (number == ""){
       alert('El campo Número de empleado es requerido');
       return false;
    }
    return true;
   
    }