export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    url: string;
    created: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[];
}
export interface Status {
  statusName: string;
  icon: any;
}

