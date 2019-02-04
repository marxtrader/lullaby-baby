function listAlbums() {

var albumBucketName = 'lucasbrianvohs';
var bucketRegion = 'us-west-2';
var IdentityPoolId = 'us-west-2:cacd8992-1145-4826-8100-2348041a9653';

var AWS = require('aws-sdk')

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});
  s3.listObjects({Delimiter: '/'}, function(err, data) {
    if (err) {
      return alert('There was an error listing your albums: ' + err.message);
    } else {
      var albums = data.CommonPrefixes.map(function(commonPrefix) {
        var prefix = commonPrefix.Prefix;
        var albumName = decodeURIComponent(prefix.replace('/', ''));
        console.log('Album Name : ',albumName)
      });
    }
  });
}
module.exports = listAlbums;