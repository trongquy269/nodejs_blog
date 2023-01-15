const newsRouter = require("./news");
const siteRouter = require("./site");

const route = function (app) {
	app.use("/news", newsRouter);
	app.use("/", siteRouter);
};

module.exports = route;
