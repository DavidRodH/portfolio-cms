export interface About {
  id: number;

  fullName: string;

  profession: string;

  description: string;

  experience: number;

  profileImage?: {
    url: string;
  };

  cv?: {
    url: string;
    name: string;
  };
}