map_cve_cisco = new Mongo.Collection("map_cve_cisco");
map_cve_cisco.allow({
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
