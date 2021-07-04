/**
 * @author: AlexanderCD
 * @description: LocalStorage
 * 
 */

/** Base de datos inicial **/
var dataBase = {
    personas: [
        {
            id: 1,
            name: 'Alexander',
            lastName: 'CD',
        }
    ]
};
$(document).ready(function(){
    var db = localStorage.getItem("dataBase");

    /** Validación por si existe la 
     * variable en el local storage **/
    if(db === null){
        localStorage.setItem("dataBase", JSON.stringify(dataBase))
    } 

    /** Evento clic del botón guardar **/
    $("#btnSave").click(function(){
       var name = $("#name").val();
       var lastName = $("#lastName").val(); 
       if(name.trim() !== "" && lastName.trim() !== ""){
        var db = JSON.parse(localStorage.getItem("dataBase"));
        db.personas.push({
         id: db.personas.length + 1,
         name: name,
         lastName: lastName
        });
 
        $("#name").val("");
        $("#lastName").val("");
 
        localStorage.setItem("dataBase", JSON.stringify(db))
       }else{
        alert("Algunos de los campos están vacios");
       }
       
    });
});