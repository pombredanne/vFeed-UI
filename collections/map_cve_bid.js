map_cve_bid = new Mongo.Collection("map_cve_bid");
map_cve_bid.allow({
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
