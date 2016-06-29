map_cve_mandriva = new Mongo.Collection("map_cve_mandriva");
map_cve_mandriva.allow({
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
