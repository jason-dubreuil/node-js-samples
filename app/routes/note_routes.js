module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    // You'll create your note here.
    console.log('hit this section of code');
    console.log(req.body);
    console.log(req.title);

    res.send('Hello')
  });
};
