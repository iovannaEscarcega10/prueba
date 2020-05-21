'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return {
    greeting: 'Hello world in JSON'
  }
})
Route.group(function () {
  Route.post('users/register', 'UserController.store');
  Route.post('users/login', 'UserController.login');
  Route.post('people/add', 'PersonController.store');
  Route.get('index', 'PersonController.index');
  Route.get('proyecto', 'ProyectoController.index').middleware('auth');
  Route.post('proyecto/agregar', 'ProyectoController.create').middleware('auth');
  Route.delete('proyecto/:id','ProyectoController.destroy').middleware('auth')
}).prefix('api/v1');
