nvd_db = new Mongo.Collection("nvd_db");
nvd_db.allow({
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
