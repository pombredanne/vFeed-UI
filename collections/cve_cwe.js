cve_cwe = new Mongo.Collection("cve_cwe");
cve_cwe.allow({
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
