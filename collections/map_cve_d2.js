map_cve_d2 = new Mongo.Collection("map_cve_d2");
map_cve_d2.allow({
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
