export interface Friend {
  name: string;
  age: number;
  weight: number;
  friends: number[];
}

export interface FriendViewItem extends Friend {
  friendsNames: string[];
}
