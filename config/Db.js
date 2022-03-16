var mongoose = require('mongoose');

function DbConnection() {
  mongoose.connect(
    `mongodb+srv://Muneeb7860:Muneeb7860@cluster0.fqgwc.mongodb.net/data?retryWrites=true&w=majority`,
    { useNewUrlParser: true },
    function (err) {
      if (err) {
        console.log("err", err)
      } else {
        console.log("successfully connected")
      }
    }
  )
}
module.exports = DbConnection;