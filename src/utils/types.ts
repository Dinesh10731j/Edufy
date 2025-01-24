export interface SignupFormInputs {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }


  export interface LoginFormInputs extends SignupFormInputs{
    email: string;
    password: string;
  }



  export interface ContactFormInputs {
    inquiryPurpose: string;
    description: string;
    fullName: string;
    email: string;
    organization: string;
    phone: string;
    message: string;
  }
  
  