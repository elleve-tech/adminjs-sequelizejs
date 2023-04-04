// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require('../models/index.js');

after(async () => {
  await db.sequelize.close();
});
