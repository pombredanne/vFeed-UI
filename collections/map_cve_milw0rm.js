map_cve_milw0rm = new Mongo.Collection("map_cve_milw0rm");
map_cve_milw0rm.allow({
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
