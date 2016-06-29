map_cve_iavm = new Mongo.Collection("map_cve_iavm");
map_cve_iavm.allow({
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
