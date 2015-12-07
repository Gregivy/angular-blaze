Package.describe({
  name: "gregivy:angular-blaze",
  summary: "AngularJS wrapper for Meteor's Blaze packages",
  version: "0.0.1",
  documentation: 'README.md',
  git: "https://github.com/gregivy/angular-blaze"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use('angular:angular@1.4.7', 'client');
  api.use('blaze-html-templates', 'client');

  //api.imply('arkham:comments-ui');

  api.addFiles([
    'blaze-templates.js',
    'blaze-templates-directive.js'
  ], 'client');
});
