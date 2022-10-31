import { myFakeFriends } from 'src/assets/friends-data';
import * as fromFriends from './friends.actions';

describe('loadFriendss', () => {
  const friends = myFakeFriends;
  const friend = {...friends[0]};
  it('should return an action', () => {
    expect(fromFriends.loadFriendss().type).toBe('[Friends] Load Friendss');
  });

  it('should call add action with my friend', () => {
    const addAction = fromFriends.addFriend({ friend });

    expect(addAction).toEqual({
      type: fromFriends.addFriend.type,
      friend,
    });
  });

  it('should call the actions with ids', () => {
    const id = 'mrsmith';
    friend.id = id;

    const editAction = fromFriends.editFriend({ id });
    const deleteAction = fromFriends.deleteFriend({ id });

    expect(editAction).toEqual({
      type: fromFriends.editFriend.type,
      id,
    });

    expect(deleteAction).toEqual({
      type: fromFriends.deleteFriend.type,
      id,
    });
  });

  it('should call the update with the right payload', () => {
    const update = {
      id: 'bob',
      changes: friend,
    };
    const updateAction = fromFriends.updateFriend({ update });

    expect(updateAction).toEqual({
      type: fromFriends.updateFriend.type,
      update,
    });
  });
});
