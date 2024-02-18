export type ProjectImageType = {
  src: string;
  label: string;
};

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
  links?: [];
  details: string[];
  images: ProjectImageType[];
  techniques: TechniqueType[];
};
