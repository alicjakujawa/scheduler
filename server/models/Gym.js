import Bookshelf from './database'
import { Schedule } from './';

export default Bookshelf.Model.extend({
  get tableName() { return 'gyms'; }
  get hasTimestamps() { return true; }

  schedules() {
    console.log(Schedule);
    return this.hasMany('Schedule');
  }
});
