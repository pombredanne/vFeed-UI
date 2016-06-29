map_cve_fedora = new Mongo.Collection("map_cve_fedora");
map_cve_fedora.allow({
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
