//"use strict";

/* 	Capitulo 10
	Control de Flujo y manejo de errores.
	
	-Sentencias de bloque.

		let nombre = "Pedro"
			{
				let nombre = "Juan"
				alert(nombre)
			}
		alert(nombre)

	-Sentencias de control de flujo
		(if, else if, else, switch)...



// Veamos como funciona Switch...

let fruta = "Mandarina";

switch(fruta){
	case "Manzana": 
		console.log("$200 el kg");
		break;
	case "Banana":
		console.log("$250 el kg");
		break;
	case "Naranja":
		console.log("$150 el kg");
		break;
	default: console.log("No hay datos");		
}

 -Sentencias de manejo de excepciones.

	- Sintaxis
	- Objeto Error
	- Catch... try (condicional e incondicional)
	- Sentencia Throw
	- Finally


function asdasd(txt) {
	alert(txt);
}

try {
	throw { "Error desde Throw";
} catch(error) {
	alert(error);
} finally {
	alert("Esto se ejecuta si o si");
}
*/

// Personal Project!

class interior {
	constructor (identificador,alto,ancho,pags,coloresFrente,coloresDorso,material) {
		this.identificador = identificador;
		this.alto = alto;
		this.ancho = ancho;
		this.pags = pags;
		this.coloresFrente = coloresFrente;
		this.coloresDorso = coloresDorso;
		this.material = material;
		this.lomo = Math.ceil(Math.ceil(parseInt(pags) / 2 ) * ((parseInt(material.altoResma))/500));
		this.formato = ancho + " x " + alto;
		this.orientacion = this.orientacionDePagina();
		};

	orientacionDePagina() {
		let orientacion;
		if (parseInt(this.ancho ) < parseInt(this.alto)) {
			orientacion = "Vertical";
		} else if (parseInt(this.ancho ) > parseInt(this.alto)) {
			orientacion = "Apaisado"
		} else if (parseInt(this.ancho ) == parseInt(this.alto)) {
			orientacion = "Cuadrado"
		} return orientacion;
		}
	};

class material {
	constructor (tipoPapel,gramaje,marca,anchoPlana,largoPlana,fibra,altoResma){
		
		this.tipoPapel = tipoPapel;
		this.gramaje = gramaje;
		this.marca = marca
		this.anchoPlana = anchoPlana;
		this.largoPlana = largoPlana;
		this.fibra = fibra;
		this.altoResma = altoResma;
	}
};

class terminacion {
	constructor (proceso,costo) {
		this.proceso = proceso;
		this.costo = costo;
	}
};

function nuevoLibro (titulo) {
	titulo = new libro (50,"Obra 80",200,140,"Bourg Binder","Libro",120,["tapa","interior","señalador"]);
};



const tiposDeTrabajos = ["Libro","Revista","Anillado","Sin Encuadernacion","Multipagina","Cosido a Hilo"]

const materiales = [
	Obra_80 = new material("Obra",80,"Boreal",650,950,950,57),
	Obra_70 = new material("Obra",70,"Boreal",650,950,950,50),
	Obra_90 = new material("Obra",90,"Boreal",650,950,950,62),
	Obra_120 = new material("Obra",120,"Boreal",650,950,950,70),
	Bookcell_80 = new material("Bookcell",80,"Boreal",650,950,950,60),
	Bookcell_65 = new material("Bookcell",65,"Boreal",650,950,950,54),
	IlustMate_120 = new material("Encapado Mate",120,"Suzano",650,950,950,52),
	IlustMate_150 = new material("Encapado Mate",150,"Suzano",650,950,950,55),
	IlustMate_170 = new material("Encapado Mate",170,"Suzano",650,950,950,58),
	IlustMate_270 = new material("Encapado Mate",270,"Suzano",720,1020,1020,64),
	IlustMate_350 = new material("Encapado Mate",350,"Suzano",650,950,950,67),
	IlustBrillo_120 = new material("Encapado Brillo",120,"Suzano",650,950,950,52),
	IlustBrillo_150 = new material("Encapado Brillo",150,"Suzano",650,950,950,55),
	IlustBrillo_170 = new material("Encapado Brillo",170,"Suzano",650,950,950,58),
	autoadhesivoIlust = new material("Autoadhesivo Ilustracion",150,"Support",500,700,700,62),
	oppBlanco = new material("OPP Blanco",150,"Support",500,700,700,62),
	oppTransparente = new material("OPP Transparente",150,"Support",500,700,700,62)
]

const procesosTerminacion = [
	guillotinado = new terminacion ("Guillotinado","Tiempo"),
	laminado = new terminacion ("laminado","Unidad"),
	troquelado = new terminacion ("Troquelado", "Tiempo"),
	medioCorte = new terminacion ("Medio Corte", "Tiempo"),
]

const materialesSeleccion = document.getElementById("material");

const trabajoNuevo = [];

window.addEventListener("load",(e)=>{
	for (mat of materiales) {
		
		crearDocFrag("#material","Option",`${mat.tipoPapel} ${mat.gramaje}`);
	};
	for (tipo of tiposDeTrabajos) {
		
		crearDocFrag("#tipoTrabajo","Option",`${tipo}`);
	};
	e.preventDefault();
});


window.addEventListener("DOMContentLoaded",(e)=>{
	for (pro of procesosTerminacion) {
		crearDocFrag(".terminacion", "div",`<input type="checkbox" id="${pro.proceso}"><p>${pro.proceso}</p>`);
	}
	e.preventDefault();
});	

var btnEnviar = document.getElementById("enviar");
var ident = document.getElementById("descripcion");
var tipoTrabajo = document.getElementById("tipoTrabajo");
var cantidad = document.getElementById("cantidad");
var alto = document.getElementById("alto");
var ancho = document.getElementById("ancho");
var pags = document.getElementById("paginas");
var materialSeleccionado = document.getElementById("material");
var papelElegido




materialSeleccionado.addEventListener("change",(e)=>{
	for (mat of materiales) {
		if (materialSeleccionado.value.includes(mat.tipoPapel + " " + mat.gramaje)) {
		papelElegido = mat
		};
	}; return papelElegido;

});

const validarInput = (elInput,elError)=>{
	
	};


function validarForm() {
		let error
		let i = 0;
		
		if (tipoTrabajo.value == "Tipo de producto") {
			error = "Elija el tipo de Producto";
			tipoTrabajo.classList.add("inputError");
		} else if (ident.value.length == 0) {
			error = "Ingrese el nombre de la parte o trabajo"
			ident.classList.add("inputError");
		} else if (cantidad.value <= 0) {
			error = "Ingrese cantidad de impresiones"
			cantidad.classList.add("inputError");
		} else if (pags.value <= 0) {
			error = "Ingrese cantidad de Paginas"
			pags.classList.add("inputError");
		} else if (materialSeleccionado.value == "Material" || materialSeleccionado == undefined) {
			error = "Seleccione el material"
			materialSeleccionado.classList.add("inputError");
		} else if (ancho.value.length == 0) {
			error = "Ingrese ancho del trabajo"
			ancho.classList.add("inputError");
		} else if (ancho.value <= 60 || ancho.value >= 300) {
			error = "El ancho del trabajo debe estar entre 60 y 300 mm"
			ancho.classList.add("inputError");
		} else if (alto.value.length == 0) {
			error = "Ingrese alto del trabajo"
			alto.classList.add("inputError");
		} else if (alto.value <= 60 || alto.value >= 300) {
			error = "El alto del trabajo debe estar entre 60 y 300 mm"
			alto.classList.add("inputError");
		};

		if (error == undefined) {
			let pifiados = document.querySelectorAll(".inputError");

			for (err of pifiados) {
				err.classList.remove("inputError");
			}
			
			informarProducto();
		
		} else {
			alert(error);
		}

};


let n = 0;

function informarProducto() {
	n = n + 1;
	let parte_1 = new interior(ident.value,parseInt(alto.value),parseInt(ancho.value),parseInt(pags.value),1,1,papelElegido);
		crearDocFragConClase(".mainContainer","div",`<div class="zonaDeArrastre" id="arrastre_${n}">${parte_1.identificador}</div><br>Lomo: ${parte_1.lomo}<br>Formato: ${parte_1.formato} ${parte_1.orientacion}<br>Material: ${parte_1.material.tipoPapel} ${parte_1.material.gramaje}`,"verde","xyy",`resultado_${n}`);
		trabajoNuevo.push(parte_1);
}


btnEnviar.addEventListener("click",(e)=>{
		e.preventDefault();
		validarForm();
		moverVentana(`#resultado_${n}`,`#arrastre_${n}`);
		});
		