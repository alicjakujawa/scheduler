import Bookshelf from './database'
import { Gym } from './Gym';
import { Workout } from './Workout';


export default Bookshelf.Model.extend({
  get tableName() { return 'schedules'; },
  get hasTimestamps() { return true; },

  workouts() {
    console.log(Workout);
    return this.hasMany('Workout');
  },

  gym() {
    return this.belongsTo('Gym', 'gym_id');
  }
});
