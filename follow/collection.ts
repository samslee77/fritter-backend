import type {HydratedDocument, Types} from 'mongoose';
import type {Follow} from './model';
import FollowModel from './model';
import UserCollection from '../user/collection';
import type {User} from '../user/model';

/**
 * This files contains a class that has the functionality to explore Followers
 * stored in MongoDB, including adding, finding, and deleting followers.
 *
 * Note: HydratedDocument<Follow> is the output of the FollowModel() constructor,
 * and contains all the information in Follow. https://mongoosejs.com/docs/typescript.html
 */
class FollowCollection {
  /**
   * Add a follow to the collection
   *
   * @param {User} user - The author of the freet
   * @return {Promise<HydratedDocument<User>>} - The newly added follower
   */
  static async addFollow(follower: User, following: User): Promise<HydratedDocument<Follow>> {
    const follow = new FollowModel({follower, following});
    await follow.save();
    return follow;
  }

  static async removeFollow(follower: User, following: User): Promise<void> {
    const follow = await FollowModel.deleteOne({follower, following});
  }

  static async viewFollow(follower: User, following: User): Promise<HydratedDocument<Follow>> {
    const follow = await FollowModel.findOne({follower, following});
    return follow;
  }

  static async viewAllFollowers(following: User): Promise<Array<HydratedDocument<Follow>>> {
    const followers = await FollowModel.find({following: following});
    return followers;
  }

  static async viewAllFollowing(follower: User): Promise<Array<HydratedDocument<Follow>>> {
    const following = await FollowModel.find({follower: follower});
    return following;
  }
}

export default FollowCollection;
