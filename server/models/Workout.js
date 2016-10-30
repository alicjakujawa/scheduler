import Bookshelf from './database'
import { Schedule } from './';

export default Bookshelf.Model.extend({
  get tableName() { return 'workouts'; }
  get hasTimestamps() { return true; }

  schedule() {
    return this.belongsTo('Schedule', 'schedule_id');
  }
});
