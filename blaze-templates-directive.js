angular.module('comments.ui').directive('blazeTemplate', function() {
  return {
    restrict: 'EA',
    scope: true,
    template: '<div></div>',
    link: function(scope, element, attrs) {
      var name = attrs['name'];
      delete attrs['name'];
      Blaze.renderWithData(Template[name], attrs, element[0]);
    }
  }
});