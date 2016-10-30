import Bookshelf from './database'
import { Gym, Workout } from './';

export default Bookshelf.Model.extend({
  get tableName() { return 'schedules'; }
  get hasTimestamps() { return true; }

  workouts() {
    console.log(Workout);
    return this.hasMany('Workout');
  }

  gym() {
    return this.belongsTo('Gym', 'gym_id');
  }
});
