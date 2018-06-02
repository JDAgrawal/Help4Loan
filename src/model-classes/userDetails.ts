
export class UserDetails
{
	referral_id: any;
	referral_firstname: string;
	referral_lastname: string;
	referral_email: string;
	referral_mobile: string;
	city_id: any;
	referral_panno: any;
	bank_name: string;
	branch_name: string;
	bank_account_no: string;
	ifsc_code: string;
	referral_device_id: any;
	referral_gcm_id: any;
	device_id: any;
	status: any;
	token: string;
	type: any;
	
	generateObject(jsonObj: any)
	{
		this.referral_id = jsonObj.referral_id;
		this.referral_firstname = jsonObj.referral_firstname;
		this.referral_lastname = jsonObj.referral_lastname;
		this.referral_email = jsonObj.referral_email;
		this.referral_mobile = jsonObj.referral_mobile;
		this.city_id = jsonObj.city_id;
		this.referral_panno = jsonObj.referral_panno;
		this.bank_name = jsonObj.bank_name;
		this.branch_name = jsonObj.branch_name;
		this.bank_account_no = jsonObj.bank_account_no;
		this.ifsc_code = jsonObj.ifsc_code;
		this.referral_device_id = jsonObj.referral_device_id;
		this.referral_gcm_id = jsonObj.referral_gcm_id;
		this.device_id = jsonObj.device_id;
		this.status = jsonObj.status;
		this.token = jsonObj.token;
		this.type = jsonObj.type;
	}
	
}