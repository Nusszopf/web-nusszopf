const aws = require('aws-sdk')

aws.config.update({
  accessKeyId: process.env.SPACES_ACCESS_KEY,
  secretAccessKey: process.env.SPACES_SECRET_KEY,
  // region: process.env.AWS_REGION_MYAPP,
  bucketname: process.env.BUCKET_NAME,
  endpoint: process.env.SPACES_ENDPOINT,
  signatureVersion: 'v4',
})

// const s3 = new aws.S3({
//   endpoint: process.env.SPACES_ENDPOINT,
//   accessKeyId: process.env.SPACES_ACCESS_KEY,
//   secretAccessKey: process.env.SPACES_SECRET_KEY,
//   signatureVersion: 'v4',
// })

const s3 = new aws.S3()

export default s3
