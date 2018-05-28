/* se crea una web que pida, por medio de un prompt la edad de una persona en años*/
/* se declara la const age = al prompt para guardar la data */
/* se utiliza parseFloat para convertir las string a number enteros o decimales */
const age = parseFloat(prompt("¿Cuál es tu edad?"));
/** primera condicion age< 1 para que arroje mensaje de error */  

if (age<1){
alert ("Ingresa un número mayor que cero!!")
}
else if (age%1 !=0){
    alert("Ingresa un Numero entero");
    }
/** mensaje de error si se ingresa un decimal */   

    else if (age>21){
    alert("Wow eres todo un adulto!!");
    }
        else if (age >18 && age <=21) {
        alert("Eres un Young Adult!!");      
        } 
            else if (age >12 && age <=18) {
            alert("Eres un Teenager!!");     
            }
                else if(age >5 && age <=12)
                {
                alert("Eres un Grandeschooler!!"); 
                }
                    else if(age >3 && age <=5)
                    {
                    alert("Eres un Preschooler!!"); 
                    }
                        else if(age >=1 && age <=3) {
                        alert("Eres un Toddler!!");    
                        }