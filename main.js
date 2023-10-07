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

    function ReadData(){
    
        let listPeople;
        if (localStorage.getItem('listPeople') == null){
           listPeople = [];
       
        }else{
           listPeople = JSON.parse(localStorage.getItem('listPeople'));
      }
    
     var html = "";
     listPeople.forEach(function(element, index){
        html += "<tr>";
        html += "<td>" + element.name +  "</td>";
        html += "<td>" + element.date +  "</td>";
        html += "<td>" + element.number +  "</td>";
        html += '</td><button onclick="deleteData(' + index +')" class="btn btn-danger">Eliminar Dato</button><button onclick="editData(' + index +')" class="btn btn-warning">Editar Dato</button>';
        html += "</tr>";
    
     });
    
     document.querySelector('#tableData tbody').innerHTML = html;
    
     }