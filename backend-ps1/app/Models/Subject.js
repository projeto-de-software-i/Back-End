'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subject extends Model {
  users () {
    return this.belongsToMany('App/Models/User').pivotModel(
      'App/Models/SubjectUser'
    )
  }
}

module.exports = Subject
