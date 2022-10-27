import * as fromFriends from './friends.actions';

describe('loadFriendss', () => {
  it('should return an action', () => {
    expect(fromFriends.loadFriendss().type).toBe('[Friends] Load Friendss');
  });
});
