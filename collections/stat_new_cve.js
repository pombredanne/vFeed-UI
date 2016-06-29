stat_new_cve = new Mongo.Collection("stat_new_cve");
stat_new_cve.allow({
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
