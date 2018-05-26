import axios from 'axios';

export class AuthenticationService
{
	
	loginUserWebService(email: string, pass: string)
	{
		var parameters = {
			email: email,
			password: pass
		};
		console.log(parameters);
		return axios.post('http://help4loan.co.in/newsite/api/auth', parameters).then(response => {
			console.log(response.data.data);
		})
		.catch(error => {
			console.log(error);
		})
	}
}