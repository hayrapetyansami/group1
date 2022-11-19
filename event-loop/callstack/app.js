const a = 5;

function b () {
	return c();
}

function c () {
	return d();
}

function d () {
	console.log(a);
}

b();

// const a = 5;

// function double (a) {
// 	return a * a;
// }

// function logDouble (a) {
// 	console.log(double(a));
// }

// logDouble(a);

/*
	Call Stack
	1. logDouble(a);
	2. console.log(double(a));
	3. double (a)
	4. a * a;
*/