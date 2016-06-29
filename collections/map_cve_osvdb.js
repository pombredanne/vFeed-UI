map_cve_osvdb = new Mongo.Collection("map_cve_osvdb");
map_cve_osvdb.allow({
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
