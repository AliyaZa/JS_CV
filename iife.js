let result = []
for (var i = 0; i < 5; i++) {
	result.push(
		function () {
			console.log(i)
		}
	)
}
result[2]
result[4]
