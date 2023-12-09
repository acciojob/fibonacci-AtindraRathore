function fibonacci(num) {
	if(num == 1) return 0;
	if(num == 2 || num == 3) return 1;
// your code here 
	let a=0,b=1,c=a+b;
	for(let i=3;i<num;i++){
		if(i == num){
			return c;
		}
		else{
			let temp = a;
			a = b;
			b = c;
			c = a+b;
		}
	}
	return c;
}

module.exports = fibonacci;
