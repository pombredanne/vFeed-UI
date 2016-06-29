map_cve_scip = new Mongo.Collection("map_cve_scip");
map_cve_scip.allow({
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
