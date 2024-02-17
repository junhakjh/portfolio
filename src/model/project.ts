export type TechniqueType = {
  name: string;
  description: string;
  image: string;
};

export type ProjectInfoType = {
  title: string;
  description: string;
  period: {
    start: string;
    end?: string;
  };
  details: string[];
  techniques: TechniqueType[];
};
