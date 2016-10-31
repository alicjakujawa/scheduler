import Bookshelf from './database';
import { Schedule } from './Schedule';

export default Bookshelf.Model.extend({
  get tableName() { return 'gyms'; },
  get hasTimestamps() { return true; },

  schedules() {
    console.log(Schedule);
    return this.hasMany('Schedule');
  }
});
