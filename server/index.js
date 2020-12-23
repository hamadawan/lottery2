const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const passport = require("passport");
const { connect } = require("mongoose");
const { success, error } = require("consola");
const path = require('path');
// Bring in the app constants
const { DB, PORT } = require("./config");

// Initialize the application
const app = exp();

// Middlewares
app.use(cors());
app.use(bp.json());
app.use(passport.initialize());

require("./middlewares/passport")(passport);

const publicPath = path.join(__dirname, '..', 'build');
app.use(exp.static(publicPath));

// User Router Middleware
app.use("/api/jackpot", require("./routes/jackpot"));
app.use("/api/users", require("./routes/users"));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const startApp = async () => {
  try {
    // Connection With DB
    await connect(DB, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    success({
      message: `Successfully connected with the Database \n${DB}`,
      badge: true
    });

    // Start Listenting for the server on PORT
    app.listen(PORT||5000, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );
    
  } catch (err) {
    console.log(err)
    error({
      message: `Unable to connect with Database \n${err}`,
      badge: true
    });
    startApp();
  }
};

startApp();
