
import axios from 'axios';

export class AuthenticationService
{
	sliderWebService()
	{
		return axios.get('http://help4loan.co.in/newsite/api/sliderImages').then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}
	
	loginUserWebService(email: string, pass: string)
	{
		var parameters = {
			email: email,
			password: pass
		};
		return axios.post('http://help4loan.co.in/newsite/api/auth', parameters).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}
	
	registerUserWebService(fname: string, lname: string, email: string, mobile: string, city_id: any)
	{
		
	}
	
}