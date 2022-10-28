export interface Friend {
  name: string;
  age: number;
  weight: number;
  friends: string[];
  id?: string;
}

export interface FriendViewItem extends Friend {
  friendsNames: string[];
}
