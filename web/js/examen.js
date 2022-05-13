
class Student{
    constructor(name,sex,cycle,school){
        this.name=name;
        this.sex=sex;
        this.cycle=cycle;
        this.school=school;
    }
}

let estado = 0;
let fila = 0;

let add = document.getElementById("agregar");
let nombres = document.getElementById("nombres");
let ciclo = document.getElementById("ciclo");
let escuela = document.getElementById("escuela");

add.addEventListener("click",function(){
    let sexo = document.querySelector('input[name=sexo]:checked').value;
    var student = new Student( 
        nombres.value, 
        sexo, 
        ciclo.value, 
        escuela.value);
    save(student);
    limpiar();
});
function save(obj){    

    if(estado==0){
        var table = document.querySelector("table");
        var tbody = document.querySelector("tbody");
        var fil = document.createElement("tr");

        console.log(fil);
        let cell_name = document.createElement("td");
        cell_name.innerHTML=obj.name;

        let cell_sexo = document.createElement("td");
        cell_sexo.innerHTML=obj.sex;

        let cell_ciclo = document.createElement("td");
        cell_ciclo.innerHTML=obj.cycle;

        let cell_escuela = document.createElement("td");
        cell_escuela.innerHTML=obj.school;

        let cell_accion = document.createElement("td");
        cell_accion.innerHTML=
        "<a href='#' class='icono2 amar' onclick='editar(this)'><i class='fa-solid fa-pen-to-square'></i></a>"
        +"<a href='#' class='icono1 rojo' onclick='eliminar(this)'><i class='fa-solid fa-trash'></i></a>"

        
        fil.appendChild(cell_name);
        fil.appendChild(cell_sexo);
        fil.appendChild(cell_ciclo);
        fil.appendChild(cell_escuela);
        fil.appendChild(cell_accion);
        tbody.appendChild(fil);
        table.appendChild(tbody);
        limpiar();

    }else{
        fila.cells[0].innerHTML = nombres.value;
        fila.cells[1].innerHTML = document.querySelector('input[name=sexo]:checked').value;
        fila.cells[2].innerHTML = ciclo.value;
        fila.cells[3].innerHTML = escuela.value;
        fila = "";
        limpiar();
        estado = 0;

    }
    console.log(obj.name);
}
function limpiar(){
    nombres.value = "";
    nombres.focus();
    document.querySelectorAll('[name=sexo]').forEach((x) => x.checked = false);
    document.getElementById("ciclo").value = '0';
    document.getElementById("escuela").value = '0';
}
function editar(row){
    fila = row.parentNode.parentNode;
    nombres.value = fila.cells[0].innerHTML;
    document.querySelector("[name=sexo][value="+fila.cells[1].innerHTML+"]").checked=true;
    ciclo.value = fila.cells[2].innerHTML;
    escuela.value = fila.cells[3].innerHTML;
    estado = 1;
}
function eliminar(row){
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
}