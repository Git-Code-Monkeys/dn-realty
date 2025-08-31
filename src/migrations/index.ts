import * as migration_20250831_033824 from './20250831_033824';

export const migrations = [
  {
    up: migration_20250831_033824.up,
    down: migration_20250831_033824.down,
    name: '20250831_033824'
  },
];
