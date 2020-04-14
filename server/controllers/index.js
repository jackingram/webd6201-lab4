/*
* index.js
* Name: Jack Ingram
* SIN: 100710241
* Date: April 2nd 2020
*
* Original Author: Tom Tsiliopoulos
*/

/* CONTROLLERS SECTION */
module.exports.displayHome = (res) =>
{
  res.render('index', 
    { 
      title: 'Home'
    });
}

module.exports.displayAbout = (res) =>
{
  res.render('index',
  {
    title: 'About'
  });
}

module.exports.displayContact = (res) =>
{
  res.render('index',
  {
    title: 'Contact'
  });
}

module.exports.displayProducts = (res) =>
{
  res.render('index',
  {
    title: 'Products'
  });
}

module.exports.displayServices = (res) =>
{
  res.render('index',
  {
    title: 'Services'
  });
}

module.exports.displayLogin = (res) =>
{
  res.render('index',
  {
    title: 'Login'
  });
}

module.exports.displayProjects = (res) =>
{
  res.render('index',
  {
    title: 'Projects'
  });
}