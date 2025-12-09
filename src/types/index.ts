export interface Person {
  id: number;
  name: string;
  photo: string;
  bio: string;
  photoCredit: string;
}

export interface Story {
  id: number;
  title: string;
  contentPath: string;
}

export interface Chapter {
  title: string;
  stories: Story[];
}

export interface ProjectInfo {
  title: string;
  description: string;
  bookPhoto: string;
}

export interface BiographyCardProps {
  person: Person;
}

export interface StoryCardProps {
  story: Story;
}
