Router.configure({
  layoutTemplate: 'header'
});


Router.route('/', function () {
  this.render('Home');
});
