const corsAllowed = require('./corsAllowed');

const corsOptions = {

  origin: (origin, callback) => {
    if (corsAllowed.indexOf(origin) === -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed By CORS."));
    }
  },

  credential: true,
  optionsSuccessStatus: 200 
}

module.exports = corsOptions;