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

     document.onload = ReadData();
 function AddData() {
    if (ValidateForm() == true){
        let name = document.getElementById('inputName').value;
        let date = document.getElementById('inputDate').value;
        let number = document.getElementById('inputNumber').value;

        var listPeople;
        if (localStorage.getItem('listPeople') == null) {
            listPeople = []

        } else {
            listPeople = JSON.parse(localStorage.getItem('listPeople'));  

        }

        listPeople.push({
            name: name,
            date: date,
            number: number,
        });
        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        ReadData();

        document.getElementById('inputName').value = "";
        document.getElementById('inputDate').value = "";
        document.getElementById('inputNumber').value = "";

    }

}

function deleteData(index){
    let listPeople;
    if (localStorage.getItem('listPeople') == null){
       listPeople = [];
   
    } else {
       listPeople = JSON.parse(localStorage.getItem('listPeople'));
  }
  listPeople.splice(index, 1)
  localStorage.setItem('listPeople', JSON.stringify(listPeople));

  ReadData();

} 

