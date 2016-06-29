map_cve_openvas = new Mongo.Collection("map_cve_openvas");
map_cve_openvas.allow({
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
