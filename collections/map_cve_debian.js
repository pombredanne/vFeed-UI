map_cve_debian = new Mongo.Collection("map_cve_debian");
map_cve_debian.allow({
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
