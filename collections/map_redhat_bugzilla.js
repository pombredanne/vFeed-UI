map_redhat_bugzilla = new Mongo.Collection("map_redhat_bugzilla");
map_redhat_bugzilla.allow({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  }
});
