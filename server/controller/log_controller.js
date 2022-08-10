//need to require in the instance of the pool
const db = require('../models/dataModel.js')

//export the middleware functions
module.exports = {
  //now we want to write the middleware for the daily log get request and post request
  getLog: (req,res,next) => {
    //first we want to destructure getting the username from the req.params 
    const { username } = req.params;
    //we then want to make our query pulling all the logs where the username/userid 
    db.query('SELECT * FROM Log WHERE user_id = (SELECT user_id FROM Users WHERE username = $1)', [username], (err,data) => {
      if (err) {
        return next({
          log: 'Express error handler caught in getLog middleware function',
          message: { err }
        });
      } else {
        console.log(data.rows);
        res.locals.logsgot = data.rows;
        return next();
      }

    })
  },
  newLog: (req,res,next) => {
    //first we want to destructure getting the username from the req.params 
    // const { username } = req.params;
    //we then want to make our query inserting into the database 
    // db.query('SELECT * FROM Log WHERE user_id = (SELECT user_id FROM Users WHERE username = $1)', [username], (err,data) => {
    //   if (err) {
    //     return next({
    //       log: 'Express error handler caught in getLog middleware function',
    //       message: { err }
    //     });
    //   } else {
    //     console.log(data.rows);
        // return next();
    //   }

    // })
  },


}