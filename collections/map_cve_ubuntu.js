map_cve_ubuntu = new Mongo.Collection("map_cve_ubuntu");
map_cve_ubuntu.allow({
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
