map_cve_redhat = new Mongo.Collection("map_cve_redhat");
map_cve_redhat.allow({
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
