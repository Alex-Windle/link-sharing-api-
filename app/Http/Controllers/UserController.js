'use strict'

const Hash = use('Hash')
const User = use('App/Model/User')

class UserController {

	* register (request, response) {
		let data = request.only('username', 'email', 'password')
		let safePassword = yield Hash.make(data.password)
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
