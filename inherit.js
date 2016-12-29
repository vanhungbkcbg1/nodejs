function parentClass()
{
	this.test=function()
	{
		console.log('this is test method');
	}
}

parentClass.prototype.doSomething=function()
{
	console.log("do something");
}

function childClass()
{
	
}

childClass.prototype=parentClass.prototype;

//use

var parentObject=new parentClass();

parentObject.doSomething();

var childObject=new childClass();
childObject.doSomething();
childObject.test();
// console.log("something");