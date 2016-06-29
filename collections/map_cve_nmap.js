map_cve_nmap = new Mongo.Collection("map_cve_nmap");
map_cve_nmap.allow({
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
