const person = {
	surname: 'Stark',
	knows: function (what, name) {
		console.log(`you ${what} know, ${name} ${this.surname}`)
	}
}

const john = { surname: 'Snow'}

person.knows ('all', 'Bran')
person.knows.call(john, 'nothing', 'John')
