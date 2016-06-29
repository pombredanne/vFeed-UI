import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  // startup database test
  console.log('----------------------------');
  console.log('---------vFeed-UI-----------');
  console.log('----------------------------');
  // verify Access to database
  if (cve_cwe.find().count != 0){
    console.log("vFeed-DB ready!");
  }
  else{
    console.log("vFeed database migration is required!")
    console.log("  1. verify MONGO_URL environment setting");
    console.log("  2. Verify vFeed migration is performed");
  }
});
