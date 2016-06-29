map_cve_hp = new Mongo.Collection("map_cve_hp");
map_cve_hp.allow({
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
