map_cve_suse = new Mongo.Collection("map_cve_suse");
map_cve_suse.allow({
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
