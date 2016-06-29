cve_reference = new Mongo.Collection("cve_reference");
cve_reference.allow({
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
