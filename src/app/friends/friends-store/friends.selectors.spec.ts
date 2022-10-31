import * as fromFriends from './friends.reducer';
import * as friendSelectors from './friends.selectors';
import { friend1, mockFriendStore } from './mock-friend-store';

const initialState = {
  friends: mockFriendStore
};

describe('Friends Selectors', () => {
  it('should select the feature state', () => {
    const result = friendSelectors.selectFriendsState({
      [fromFriends.friendsFeatureKey]: mockFriendStore
    });

    expect(result).toEqual(mockFriendStore);
  });

  it('should get all the entities', () => {
    const entities = friendSelectors.getAllEntities(initialState);

    expect(Object.keys(entities).length).toBe(2);
  });

  it('should get the right friend', () => {
    const id = fromFriends.selectUserId(friend1);
    const friendReq = friendSelectors.getFriend(id)
    const friend = friendReq(initialState);

    expect(friend).toEqual(friend1);
  })
});
