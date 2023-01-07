const notFound = (req, res) => {
  console.log("In the not found middleware");
  res.status(404).send("Route does not exist 404 hehe");
};

module.exports = notFound;
