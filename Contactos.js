const listaDeContactos= [
    {
    id: 1,
    nombre : "Jose Alfredo",
    apellidos : "Rodriguez Gonzalez",
    numero : 8126028753,
    email : "Alfredordzgzz.13@gmail.com",
    direccion : "durazno 228", 
    ciudad:"Nuevo Leon" },
    {
    id:2,    
    nombre :"Lorena",
    apellidos : "Santiago Sanchez",
    numero : 81169995845,
    email : "lore22@outlook.com", 
    direccion : "mango 26, col. las huertas", 
    ciudad: "Oaxaca"
    },
    
    {
    id:3,
    nombre : "Patrice",
    apellidos :"Lemay Jansen",
    numero : 4389637875,
    email : "patricecumbiero15@hotmail.com",
    direccion : `nadeu 185, Saint cesaire, Quebec`},
   {
    id:4,

    nombre : "Hugo",
    apellidos :"Dion Boss",
    numero : 5345567879,
    email : "HgoDon154@gmail.com",
    direccion : "cécile 225,granby",
    ciudad: "Quebec"},


    
    {
    id:5,    
    nombre : "Jesus",
    apellidos : "Rodriguez Ruiz",
    numero : 5836981524,
    email : "jsusruiz@outlook.com",
    direccion : "leclaire 522, Saint cesaire", 
    ciudad:"Quebec"},
   
    {
    id:6,    
    nombre : "Caro",
    apellidos :"Lemay Declaure",
    numero : 4565367271,
    email :"Caro_crazy23@gmail.com",
    direccion :"carole 226, Rougemont" ,
    ciudad: "Quebec"},

    {
    id:7,     
    nombre :"Jean",
    apellidos : "Baptiste",
    numero : 5385522624,
    email : "Jeanclaudevandamme@gmail.com",
    direccion :"ahuejutla 326", 
    ciudad: "montreal"},
    
        


        

];
 function agregarContacto(id,nombre,apellidos,numero, email,direccion, ciudad){
    const nuevoContacto= {
    id:id,
    nombre:nombre,
    numero:numero,
    apellidos:apellidos,
    email:email,
    direccion:direccion,
    ciudad:ciudad};

 listaDeContactos.push(nuevoContacto);
 }



function borrarContacto(id) {
    const index = listaDeContactos.findIndex((contacto) => contacto.id === id);
    if (index !== -1) {
        listaDeContactos.splice(index, 1);
        console.log("Contacto con ID " + id + " eliminado.");
    } else {
        console.log("El contacto con ID " + id + " no existe.");
    }
}

    
    
  

 function actualizarContacto(id, nuevosDatos){
    const contacto = listaDeContactos.find((c)=>c.id===id);
        
  
     



     if(contacto){
        if(nuevosDatos.nombre){
            contacto.nombre= nuevosDatos.nombre;
        }
        if(nuevosDatos.apellidos){
            contacto.apellidos= nuevosDatos.apellidos;
        }
        if(nuevosDatos.numero){
            contacto.numero= nuevosDatos.numero;
        }
        if(nuevosDatos.email){
            contacto.email= nuevosDatos.email;
        }
        if(nuevosDatos.direccion){
            contacto.direccion= nuevosDatos.direccion;
        }
        if(nuevosDatos.ciudad){
            contacto.ciudad= nuevosDatos.ciudad;
        }
        
         console.log("Contacto aztualizado:");
         console.log(contacto);}
         else{
            console.log("El contacto con ID"+ id + "no existe.");
         }
      }
    
    
    function imprimirContactos(){
        console.log("lista de Contactos");
        listaDeContactos.forEach (function(contacto) {
            console.log(contacto.id+ ` `+contacto.nombre+ ` `+ contacto.apellidos+` ` +contacto.numero+ ` `+ contacto.email+` `+ contacto.direccion+` `+ contacto.ciudad)
        });
    }
    
    imprimirContactos();
    borrarContacto();
    imprimirContactos();
    actualizarContacto(2, {nombre: `Camig`,id:``,apellidos: `perez`,numero:18524494,email:`Camila@hotmail.com`,direccion:`durazno`,ciudad:`Colombia` });
    imprimirContactos()

