map_cve_oval = new Mongo.Collection("map_cve_oval");
map_cve_oval.allow({
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
