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

	cityListWebService()
	{
		return axios.get('http://help4loan.co.in/newsite/api/cities').then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	registerUserWebService(fname: string, lname: string, email: string, mobile: string, city_id: any)
	{
		var parameters = {
			fname: fname,
			lname: lname,
			email: email,
			mobile: mobile,
			city_id: city_id
		};
		return axios.post('http://help4loan.co.in/newsite/api/register', parameters).then(response => {
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

	forgotPasswordWebService(email: string)
	{
		var parameters = {
			email: email
		};
		return axios.post('http://help4loan.co.in/newsite/api/forgot', parameters).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
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

	phoneCallWebService(referral_id: any, token: string)
	{
		var parameters = {
			referral_id: referral_id
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/call', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	updateProfileWebService(referral_id: any, token: string, 
			fname: string, lname: string, email: string, 
			mobile: string, city_id: any, bank_name: string, 
			branch_name: string, bank_account_no: any, ifsc_code: any)
	{
		var parameters = {
			referral_id: referral_id,
			fname: fname,
			lname: lname,
			email: email,
			mobile: mobile,
			bank_name: bank_name,
			branch_name: branch_name,
			bank_account_no: bank_account_no,
			ifsc_code: ifsc_code,
			city_id: city_id
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/profile', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	productsWebService(referral_id: any, token: string)
	{
		var parameters = {
			referral_id: referral_id
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/products', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	subProductsWebService(referral_id: any, product_id: any, token: string)
	{
		var parameters = {
			referral_id: referral_id,
			product_id: product_id
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/subproducts', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	addCustomerWebService(referral_id: any, product_id: any, sub_product_id: any, fullname: string, city_id: any, mobile: any, token: string)
	{
		var parameters = {
			referral_id: referral_id,
			product_id: product_id,
			sub_product_id: sub_product_id,
			fullname: fullname,
			city_id: city_id,
			mobile: mobile
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/addCustomer', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	verifyCustomerWebService(referral_id: any, customer_id: any, security_code: any, token: string)
	{
		var parameters = {
			referral_id: referral_id,
			customer_id: customer_id,
			security_code: security_code
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/verify', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	pendingStatusWebService(referral_id: any, token: string)
	{
		var parameters = {
			referral_id: referral_id
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/pendingCustomers', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	activeStatusWebService(referral_id: any, token: string)
	{
		var parameters = {
			referral_id: referral_id
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/active', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	completedStatusWebService(referral_id: any, token: string)
	{
		var parameters = {
			referral_id: referral_id
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/completed', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	rejectedStatusWebService(referral_id: any, token: string)
	{
		var parameters = {
			referral_id: referral_id
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/rejected', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	changePasswordWebService(referral_id: any, old: string, _new: string, token: string)
	{
		var parameters = {
			referral_id: referral_id,
			old: old,
			new: _new
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/pendingCustomers', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	faqWebService(referral_id: any, token: string)
	{
		var parameters = {
			referral_id: referral_id
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/faq', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

	logoutWebService(referral_id: any, token: string)
	{
		var parameters = {
			referral_id: referral_id
		};
		var axiosConfig = {
		  headers: {
		      token: token,
		  }
		};
		return axios.post('http://help4loan.co.in/newsite/api/logout', parameters, axiosConfig).then(response => {
			return response.data;
		})
		.catch(error => {
			return error;
		});
	}

}