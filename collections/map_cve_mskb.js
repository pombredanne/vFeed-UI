map_cve_mskb = new Mongo.Collection("map_cve_mskb");
map_cve_mskb.allow({
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
