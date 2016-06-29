cwe_capec = new Mongo.Collection("cwe_capec");
cwe_capec.allow({
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
