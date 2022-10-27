import * as fromFriends from './friends.reducer';
import { selectFriendsState } from './friends.selectors';

describe('Friends Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFriendsState({
      [fromFriends.friendsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
