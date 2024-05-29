const Routes = (module.exports = require("next-routes")());

Routes.add("projectspage");
Routes.add("projectpage", "/project/:id");

export {};
