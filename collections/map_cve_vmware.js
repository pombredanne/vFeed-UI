map_cve_vmware = new Mongo.Collection("map_cve_vmware");
map_cve_vmware.allow({
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
