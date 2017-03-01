var $ = require('jquery');
var Backbone = require('backbone');

var User = Backbone.Models.extend({
  id:'_id'
});

var MessagesModel = Backbone.Model.extend({
  id:'_id'
});

var MessagesCollection = Backbone.Collection.extend({
  model: MessagesModel
});

module.exports = {
  User: User,
  UserCollection: UserCollection,
  MessagesModel: MessagesModel,
  MessagesCollection: MessagesCollection
};
