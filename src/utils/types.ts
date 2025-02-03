export interface SignupFormInputs {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }


  export interface LoginFormInputs{
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

  export interface BrowseCoursesType {
    id: number;
    title: string;
    instructor: string;
    category: string;
    price: number;
    livestream: {
      isLive: boolean;
      url: string | null;
      schedule: string;
    };
  }
  
  
  