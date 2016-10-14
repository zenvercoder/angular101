#Angular Curriculum

## Unit 1

 0. [Intro and Setup](/Unit-1/01-intro-and-setup.md)
 
 <!--npm install from terminal, using CDN can make program slower-->
 `npm i angular@1.5.8 -S`

 * Angular is a clientside tech written in JavaScript used to make complex single-page apps quickly.

 * 3 complaints people have about Angular: Angular’s fundamental proposition blurs the line between front end and back end. Angular is aimed at large enterprise IT back-enders and managers who are confused by JavaScript.
 Angular forces you to work in one specific way.

 * Is Angular an MVC framework? Angular fits whatever definition you want to feed into it

 * ng-app. What is it and what does it do? What does ng stand for?
It is a module provided by default and contains the core components of AngularJS. Directives, services, factories, filters, global APIs

 * All angular tags with the ng prefix will be rendered by the Angular interpreter

 * in AngularJS, you must start from the ground up with your architecture in mind

 * Don't augment jQuery with AngularJS

 * single-page applications are applications. They're not webpages. So we need to think like a server-side developer in addition to thinking like a client-side developer. We have to think about how to divide our application into individual, extensible, testable components.

 0. [Data Binding](/Unit-1/02-data-binding.md)

 * vanilla JS that will automatically update the h1 when the value in the text input changes

 ` <script>
        document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('[name=auto]').addEventListener('input', function (e) {
            document.querySelector('h1').innerHTML = e.target.value
          });
        });
      </script>`

 * two-way binding: when a model changes, the view knows about it.when a view changes, the model also knows about it.

 * ngModel binds the from to the model. Any changes to the control updates the data in the model and when you change the model it updates the control

 * Controllers are the behavior behind the DOM elements. Angular makes this clean and easy b/c you don't have to register callbacks or watch for model changes.

 * dirty checking: scanning the scope for changes

 * Find a way to set the initial value of "name" as "BoJack" (without writing a controller).

 * What are those {{ }} expressions? Are they Handlebars? They are a declarative way of specifying data binding locations in HTML. AngularJS will update the text whenever the property changes

 * Explain what two-way data binding is: Data-binding is an automatic way of updating the view whenever the model changes

 * BONUS: Research the [$digest loop](https://www.ng-book.com/p/The-Digest-Loop-and-apply/) "When an event is fired/triggered, JavaScript creates an event object and executes any functions listening for the specific events with this event object. This callback method then runs inside the JavaScript function, which returns to the browser, potentially updating the DOM. No two events can run at the same time. The browser waits until one event handler finishes before the next handler is called. In non-Angular JavaScript, we can attach a function callback to the click event on a div. Any time that a click event is found on an element, the function callback runs:

`var div = document.getElementById("clickDiv");
 div.addEventListener("click",
    function(evt) {
        console.log("evt", evt);
 });`

 0. [Angular MVC](/Unit-1/03-angular-mvc.md)

 `angular.module("myapp", [])
        .controller("HelloController", function($scope) {`
 creates an angular module called myapp with no dependencies (empty brackets). You can chain functions after .controller


 0. [Expressions and Filters](/Unit-1/04-expressions-and-filters.md)
 0. [Built-In Directives](/Unit-1/05-built-in-directives.md)
 0. [Intro to Controllers](/Unit-1/06-intro-to-controllers.md)
 0. [Scope](/Unit-1/07-intro-to-scope.md)
 0. [Angular Events](/Unit-1/08-intro-to-events.md)
 0. [Form Validation](/Unit-1/09-form-validation.md)
 0. [Animations](/Unit-1/10-animation.md)
 0. [Unit 1 Assessment Reddit Clone](/Unit-1/11-reddit-clone.md)

## Unit 2

 0. [A New Structure](/Unit-2/01-a-new-structure.md)
 0. [Digest Cycle](/Unit-2/02-digest-cycle.md)
 0. [Dependency Injection](/Unit-2/03-dependency-injection.md)
 0. [Custom Filters](/Unit-2/04-custom-filters.md)
 0. [Routing](/Unit-2/05-routing.md)
 0. [HTTP Service](/Unit-2/06-http-service.md)
 0. [Movie Search App](/Unit-2/07-movie-search.app.md)
 0. [Services](/Unit-2/08-services.md)
 0. [Promises](/Unit-2/09-promises.md)
 0. [Custom Directives Part 1](/Unit-2/10-custom-directives-part1.md)
 0. [Custom Directives Part 2](/Unit-2/11-custom-directives-part2.md)
 0. [Unit 2 Assessment Shopping Cart App](/Unit-2/12-shopping-cart-app.md)

## Unit 3

 0. [Express / Angular](/Unit-3/01-express-postgres-angular.md)
 0. [Routing and Postman](/Unit-3/02-routing-and-postman.md)
 0. [Angular Express Project](/Unit-3/03-angular-with-express-project.md)
 0. [Fullstack CRUD](/Unit-3/04-fullstack-crud.md)
 0. [CRUD with ngResource](/Unit-3/05-crud-with-ngResource.md)
 0. [Token-Based Auth](/Unit-3/06-token-based-auth.md)
 0. [Testing](/Unit-3/07-angular-node-testing.md)
 0. [ui-router](/Unit-3/08-ui-router.md)
 0. [Unit 3 Assessment Reddit Clone Redux](/Unit-3/09-unit-3-assessment.md)

## Unit 4

 0. [Firebase Intro](/Unit-4-(optional)/01-firebase-intro.md)
 0. [AngularFire Intro](/Unit-4-(optional)/02-angularfire-intro.md)
 0. [AngularFire Arrays and CRUD](/Unit-4-(optional)/03-angularfire-arrays-and-crud.md)
 0. [AngularFire Project](/Unit-4-(optional)/04-angularfire-project.md)
 0. [AngularFire Auth](/Unit-4-(optional)/05-angularfire-auth.md)
 0. [Angular Structure and Style](/Unit-4-(optional)/06-structuring-angular-apps.md)
 0. [Angular + Rails Setup](/Unit-4-(optional)/07-angular-with-rails-setup.md)
 0. [Angular + Rails Resources and HTML5 Pushstate](/Unit-4-(optional)/08-angular-with-rails-resources-and-paths.md)


// all the logic goes into the controller
// as you update input field, it updates the scope


// rootscope. dependency injection. in controller you can say i want root scope. angular has an engine running behind everything. $rootscope.name = $scope.name

// it's a way of passing info btwn controllers/services. recommended that you use it sparingly.
