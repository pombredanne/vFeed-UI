stat_vfeed_kpi = new Mongo.Collection("stat_vfeed_kpi");
stat_vfeed_kpi.allow({
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
