map_cve_surikata = new Mongo.Collection("map_cve_surikata");
map_cve_surikata.allow({
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
