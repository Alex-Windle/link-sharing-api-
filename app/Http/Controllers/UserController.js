'use strict'

class UserController {

	* register (request, response) {
		let data = request.only('username', 'email', 'password')
		//hash password
		let safePassword = yield Hash.make(data.password)
		//add the password to data object
		data.password = safePassword
		let user = yield User.create(data)

		response.json(user)
	}

	* login (request, response) {
		// request: name, password
		// check name exists; match passwords
		// response: 
	}
}

module.exports = UserController
