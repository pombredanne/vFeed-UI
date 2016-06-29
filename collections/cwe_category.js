cwe_category = new Mongo.Collection("cwe_category");
cwe_category.allow({
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
