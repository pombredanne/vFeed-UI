cve_cpe = new Mongo.Collection("cve_cpe");
cve_cpe.allow({
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
