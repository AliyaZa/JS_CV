function sayHelloTo(name) {
	const message = 'Hello' + name
	return function () {
		console.log(message)
	}
}

const HelloToAliya = sayHelloTo ('Aliya')
console.log(HelloToAliya)
console.log(HelloToAliya())
HelloToAliya()