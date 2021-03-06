/* PROM GET DIAMETRO
DIVIDELO EN 2
GUARDALO EN RAD
PROM GET ALTURA
GUARDALO EN ALT
GET NUMERO DE CILINDROS

RAD = RAD2;
LET VOL = PI X RAD X ALT X CYL

ESCRIBE VOL EN LA PANTALLA 
*/
function fn1() {
 let bore = document.getElementById("bo").value;
 let stroke = document.getElementById("st").value;
 let cyl = document.getElementById("cy").value;
let rad = (bore /2 );
let vol = Math.PI * rad * rad * stroke * cyl / 1000;

let n = vol.toFixed(2);


let sentence = `<h1>${n}</h1>`
document.querySelector('main').innerHTML = sentence;


}