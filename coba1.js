function Tambah(){

	var Angka1;
	var Angka2;
	var HasilJumlah=0;

	Angka1 = parseInt(document.getElementById("txtAngka1").value);
	Angka2 = parseInt(document.getElementById("txtAngka2").value);

	HasilJumlah =  Angka1 + Angka2;
	// alert("Hasil Penjumlahan : "+HasilJumlah);
	document.getElementById("hasil").innerHTML = "<b>"+HasilJumlah+"<b>";
}

function Kali(){

	var Angka1;
	var Angka2;
	var HasilKali=1;

	Angka1 = parseInt(document.getElementById("txtAngka1").value);
	Angka2 = parseInt(document.getElementById("txtAngka2").value);

	HasilKali =  Angka1 * Angka2;
	// alert("Hasil Penjumlahan : "+HasilJumlah);
	document.getElementById("hasil").innerHTML = "<b>"+HasilKali+"<b>";
}

function Bagi(){

	var Angka1;
	var Angka2;
	var HasilBagi=1;

	Angka1 = parseInt(document.getElementById("txtAngka1").value);
	Angka2 = parseInt(document.getElementById("txtAngka2").value);

	HasilBagi =  Angka1 / Angka2;
	// alert("Hasil Penjumlahan : "+HasilJumlah);
	document.getElementById("hasil").innerHTML = "<b>"+HasilBagi+"<b>";
}

function Kurang(){

	var Angka1;
	var Angka2;
	var HasilKurang=1;

	Angka1 = parseInt(document.getElementById("txtAngka1").value);
	Angka2 = parseInt(document.getElementById("txtAngka2").value);

	HasilKurang =  Angka1 - Angka2;
	// alert("Hasil Penjumlahan : "+HasilJumlah);
	document.getElementById("hasil").innerHTML = "<b>"+HasilKurang+"<b>";
}

function Sqrt(){
	var Angka1;
	HasilSqrt = 1;
	Angka1 = parseInt(document.getElementById("txtAngka1").value);
	HasilSqrt = Math.sqrt(Angka1);
	document.getElementById("hasil").innerHTML = "<b>"+HasilSqrt+"<b>";
}

function SIN(){
	var Angka1;
	HasilSIN = 1;
	Angka1 = parseInt(document.getElementById("txtAngka1").value);
	HasilSIN = Math.sin(Angka1 * Math.PI / 180);
	document.getElementById("hasil").innerHTML = "<b>"+HasilSIN+"<b>";
}

function COS(){
	var Angka1;
	HasilCOS = 1;
	Angka1 = parseInt(document.getElementById("txtAngka1").value);
	HasilCOS = Math.cos(Angka1 * Math.PI / 180);
	document.getElementById("hasil").innerHTML = "<b>"+HasilCOS+"<b>";
}

function TAN(){
	var Angka1;
	HasilTAN=1;
	Angka1 = parseInt(document.getElementById("txtAngka1").value);
	HasilTAN = Math.sin(Angka1 * Math.PI / 180) / Math.cos(Angka1 * Math.PI / 180) ;
	document.getElementById("hasil").innerHTML = "<b>"+HasilTAN+"<b>";
}

function LOG(){
	var Angka1;
	HasilLOG = 0;
	Angka1 = parseInt(document.getElementById("txtAngka1").value);
	HasilLOG = Math.log(Angka1);
	document.getElementById("hasil").innerHTML = "<b>"+HasilLOG+"<b>";
}