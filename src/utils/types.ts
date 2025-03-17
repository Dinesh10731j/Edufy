export interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormInputs {
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

export interface loginResponse {
  token: string;
}

export interface signupResponse {
  token: string;
}

export interface contactResponse {
  message: string;
  success: boolean;
}



export interface Block {
  id: string;
  type: string;
  data: unknown;
}

// 📌 Image Block
export interface ImageBlock extends Block {
  type: "image";
  data: {
    file: {
      url: string;
    };
    caption?: string;
    withBackground?: boolean;
    withBorder?: boolean;
    stretched?: boolean;
  };
}

export interface CodeBlock extends Block {
  type: "code";
  data: {
    code: string;
  };
}

export interface HeaderBlock extends Block {
  type: "header";
  data: {
    text: string;
    level: number; 
  };
}


export interface TableBlock extends Block {
  type: "table";
  data: {
    content: string[][]; 
  };
}


export interface WarningBlock extends Block {
  type: "warning";
  data: {
    title: string;
    message: string;
  };
}


export interface ChecklistBlock extends Block {
  type: "checklist";
  data: {
    items: { text: string; checked: boolean }[];
  };
}


export interface ListBlock extends Block {
  type: "list";
  data: {
    style: "ordered" | "unordered";
    items: string[];
  };
}


export interface EmbedBlock extends Block {
  type: "embed";
  data: {
    service: string;
    source: string;
    embed: string;
    width: number;
    height: number;
    caption?: string;
  };
}


export interface InlineCodeBlock extends Block {
  type: "inline-code";
  data: {
    text: string;
  };
}

export interface QuoteBlock extends Block {
  type: "quote";
  data: {
    text: string;
    caption: string;
    alignment: "left" | "center" | "right";
  };
}


export interface RawBlock extends Block {
  type: "raw";
  data: {
    html: string;
  };
}


export type EditorBlock =
  | ImageBlock
  | CodeBlock
  | HeaderBlock
  | TableBlock
  | WarningBlock
  | ChecklistBlock
  | ListBlock
  | EmbedBlock
  | InlineCodeBlock
  | QuoteBlock
  | RawBlock;


export interface EditorContent {
  title:string,
  hashtags: string | string[];
  time: number;
  version: string;
  blocks: EditorBlock[];
}
