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


  