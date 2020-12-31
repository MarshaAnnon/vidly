module.exports = function (err, req, res, next) {
  res.status(500).send('Uh-oh, something went wrong');
};
