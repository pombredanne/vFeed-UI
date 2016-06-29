map_cve_msf = new Mongo.Collection("map_cve_msf");
map_cve_msf.allow({
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
