'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonSchema extends Schema {
  up() {
    this.create('people', (table) => {
      table.increments()
      table.string('nombre', 60)
      table.string('apellido_m', 60)
      table.string('apellido_p', 60)
      table.timestamps()
    })
  }

  down() {
    this.drop('people')
  }
}

module.exports = PersonSchema
