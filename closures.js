// function sayHelloTo(name) {
// 	const message = 'Hello' + name
// 	return function () {
// 		console.log(message)
// 	}
// }
//
// const HelloToAliya = sayHelloTo ('Aliya')
// console.log(HelloToAliya)
// console.log(HelloToAliya())
// HelloToAliya()

// function createFw() {
// 	const fw = ['Vue', 'React']
//
// 	return {
// 		print: function () {
// 			console.log(fw.join(' '))
// 		},
// 		add: function (framework) {
// 			fw.push(framework)
// 		}
// 	}
// }
//
// const manager = createFw()
// console.log(manager)
// manager.print()
// manager.add('Angular')
// manager.print()


// setTimeout

const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++)
{
	setTimeout(function () {
		console.log(`fib[${i}] = ${fib[i]}`)
	}, 1500)
}

