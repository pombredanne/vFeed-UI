map_cve_ms = new Mongo.Collection("map_cve_ms");
map_cve_ms.allow({
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
