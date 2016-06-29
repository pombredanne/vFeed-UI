map_cve_nessus = new Mongo.Collection("map_cve_nessus");
map_cve_nessus.allow({
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
