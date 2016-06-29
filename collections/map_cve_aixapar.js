map_cve_aixapar = new Mongo.Collection("map_cve_aixapar");
map_cve_aixapar.allow({
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
