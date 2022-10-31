import { State } from './friends.reducer';

export const friend1 = {
  name: 'George Washington',
  age: 300,
  weight: 250,
  friends: ['Michael Jordan55'],
};

export const friend2 = {
  name: 'Micheal Jordan',
  age: 55,
  weight: 100,
  friends: [],
};

export const mockFriendStore: State = {
  ids: ['George Washington300', 'Micheal Jordan55'],
  entities: {
    'George Washington300': friend1,
    'Micheal Jordan55': friend2,
  },
  friends: [],
  selectedId: null,
};


