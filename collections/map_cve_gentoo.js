map_cve_gentoo = new Mongo.Collection("map_cve_gentoo");
map_cve_gentoo.allow({
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
