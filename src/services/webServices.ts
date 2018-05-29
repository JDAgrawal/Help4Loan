import axios from 'axios';

export class WebServices
{
	loginSliderWebService()
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

	cityListWebService()
	{
		return axios.get('http://help4loan.co.in/newsite/api/cities').then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}
	
	getCityNameWebService(city_id: any)
	{
		var cityName: string;
		return axios.get('http://help4loan.co.in/newsite/api/cities').then(resp => {
			console.log(resp.data);
			resp.data.data.forEach(cityDetails =>
			{
				if(cityDetails.city_id == city_id)
				{
					console.log(cityDetails.name);
					cityName = cityDetails.name;
				}
			})
			return cityName;
		});

	}

	homeSliderWebService()
	{
		return axios.get('http://help4loan.co.in/newsite/api/sliderImages2').then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}
}