export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_3ZzXQnkXHshCiViaxXuhqTr9",
  s3: {
    REGION: "us-east-1",
    BUCKET: "https://s3.console.aws.amazon.com/s3/buckets/lullaby-baby-v2-v2-attachmentsbucket-12bdy8yzugyuz/?region=us-east-1&tab=overview"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://gsfvzxgf61.execute-api.us-east-1.amazonaws.com/v1"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_yiGyURiS7",
    APP_CLIENT_ID: "7uvnlrjb6ebn3ei1hdrc6u8lvl",
    IDENTITY_POOL_ID: "us-east-1:7689a92d-bebf-46c0-bc8f-16773ea771d4"
  }
};