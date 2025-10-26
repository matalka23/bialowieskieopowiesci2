export interface Person {
  id: number;
  name: string;
  photo: string;
  bio: string;
}

export interface Story {
  id: number;
  title: string;
  contentPath: string;
  chapters?: string[];
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
