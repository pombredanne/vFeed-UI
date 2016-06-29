map_cve_snort = new Mongo.Collection("map_cve_snort");
map_cve_snort.allow({
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
