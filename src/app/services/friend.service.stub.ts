import { BehaviorSubject, map } from "rxjs";
import { myFakeFriends } from "src/assets/friends-data";
import { Friend } from "../models/friend.model";

export class FriendServiceStub {
  allFriends$ = new BehaviorSubject(myFakeFriends);
  getMyFriends = (friendIds: string[]) => this.allFriends$.pipe(
    map((buddies) => buddies.filter((buddy) => {
      const isBuddy = friendIds.find((palId) => buddy.name.includes(palId));
      return !!isBuddy;
    }))
  );
  selectedFriend = new BehaviorSubject(myFakeFriends[0]);


  addFriend(friend: Friend) { }

  deleteFriend(id: string) { }

  editFriend(id: string) { }

  updateFriend(id: string, friend: Partial<Friend>) { }
}
