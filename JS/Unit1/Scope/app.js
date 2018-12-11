

function isEven(num)
{
	return (num%2==0);
}

function factorial(num)
{
	var result = 1;
	if (num<=1) {
		return 1;
	}
	else {
		for(var i = 2;i<=num;i++) {
			result *= i;
		}
	}
	return result;
}

function kebabtoSnake(str)
{
	str = str.replace(/-/g,"_");
	return str;
}


function doMath()
{
	var x = 40;
	console.log(x);
}
