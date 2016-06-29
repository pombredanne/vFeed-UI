map_cve_saint = new Mongo.Collection("map_cve_saint");
map_cve_saint.allow({
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
