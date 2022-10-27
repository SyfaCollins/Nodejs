/** @format */

const dashboard = async(req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({msg:`You can Access you private content ${luckyNumber}`})
};

const login = (req, res, next) => {
  const { name, password } = req.query;
  console.log(name, password);
  res.send('logged In')
  next();
};

module.exports = { dashboard, login };