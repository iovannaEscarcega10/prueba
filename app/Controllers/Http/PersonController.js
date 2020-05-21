'use strict'

const Person = use('App/Models/Person');
class PersonController {
  /*async index({
    response
  }) {
    let person = await Person.all();
    return response, JSON(person);
  };*/
  async index({
    auth
  }) {
    const user = await auth.getUser();
    console.log(user.id);
    return {
      mensaje: "Hola mundo"
    }
  }

  async store({
    request
  }) {
    const {
      nombre,
      apellido_p,
      apellido_m
    } = request.all();
    console.log(nombre, apellido_p, apellido_m);
    const person = await Person.create({
      nombre,
      apellido_p,
      apellido_m
    });
    return person;
  };
}

module.exports = PersonController
