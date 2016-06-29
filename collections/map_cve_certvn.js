map_cve_certvn = new Mongo.Collection("map_cve_certvn");
map_cve_certvn.allow({
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
