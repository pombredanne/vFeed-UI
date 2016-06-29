cwe_db = new Mongo.Collection("cwe_db");
cwe_db.allow({
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
