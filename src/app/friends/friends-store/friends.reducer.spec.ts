import { reducer, initialState, selectUserId } from './friends.reducer';
import * as friendActions from './friends.actions';
import { myFakeFriends } from 'src/assets/friends-data';

describe('Friends Reducer', () => {
  describe('an add action', () => {

    const friends = myFakeFriends;
    const friend = friends[0];
    const friendId = selectUserId(friend);
    it('should return the previous state', () => {
      const action = friendActions.addFriend({ friend });

      const result = reducer(initialState, action);

      const addedFriendState = {
        ids: [friendId],
        entities: {
          [friendId]: {
            ...friend,
            id: friendId
          }
        },
        friends: [],
        selectedId: null
      }

      expect(result.ids).toEqual(addedFriendState.ids);

      const deleteAction = friendActions.deleteFriend({ id: friendId });
      const deletedState = reducer(result, deleteAction)

      expect(deletedState).toEqual(initialState);
    });
  });

  it('should set the selectedId', () => {
    const editAction = friendActions.editFriend({ id: 'bob' });
    const editResult = reducer(initialState, editAction);

    expect(editResult.selectedId).toBe('bob');
  })

  it('should generate an id from the name and age', () => {
    const id = selectUserId(myFakeFriends[0]);

    expect(id).toBe('George Washington300');
  })
});
