let counter1;
let i = 1;

function setup() {
	noCanvas();

	//myLoop(); --- nomor III

	/* --- nomor II
	counter1 = new Counter(0, 1000);
	counter1.start();
	counter2 = new Counter(0, 700);
	counter2.start();
	counter3 = new Counter(0, 200);
	counter3.start();
	*/

	/*
	I. Bentuk paling sederhana dari callback function

	dimana ada function didalam function
	*/
	createCanvas(600,400);
	background(0);
	let button = createButton('press');
	button.mousePressed(changeBackground);

	function changeBackground(){
		background(random(255));
	}
}

/*
II. OOP Javascript dan callbackfunction
*/

class Counter{
	constructor(start, wait){
		this.count = start;
		this.wait = wait;
		this.p = createP('');
	}

	start(){
		setInterval(() => this.countIt(), this.wait);
	}

	countIt(){
		console.log(this);
		this.count++;
		this.p.html(this.count);
	}
}

/*
III. Increment i waiting 1 sec

setTimeout(callBackFunction,Waiting)
jadi dia jalanin waitingnya dulu 1000 ms baru jalanin si callBackFunctionnya
yang dimana si callbackfunctionnya ngejalanin myLoop Lagi

*/

function myLoop () {
	setTimeout(() => {
	   console.log(i);    
	   i++;
	   myLoop();
	}, 1000)
 }


 /* Kesimpulan dari callBackFunction adalah: 
 	jadi ada beberapa function bawaan seperti
	 1. setInterval
	 2. setTimeout

	 itu merupakan function bawaan yang sudah siap pakai untuk membuat suatu kondisi tetapi
	 tidak tau apa yang akan dihasilkan

	 maka dari itu ada callback function yang berguna untuk kita melakukan coding dengan 
	 kondisi pada function bawaan tersebut
*/