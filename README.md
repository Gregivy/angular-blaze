# angular-blaze
AngularJS wrapper for Meteor's packages with blaze

# How to use?
- Make sure you have the `angular` package in your root account.
- Add the package:
- Add a dependency on your AngularJS module. For example:
```javascript
angular.module('myApp', ['angular-meteor', 'blazeTemplates']);
```

- Use it in your app, for example:
```html
<blaze-template someparam="..."></blaze-template>
```