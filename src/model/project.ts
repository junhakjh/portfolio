export type ProjectInfoType = {
  title: string;
  description: string;
  period: {
    start: string;
    end?: string;
  };
  functions: string[];
  techniques: {
    name: string;
    description: string;
    image: string;
  }[];
};
