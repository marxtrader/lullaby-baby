export default {
  MAX_ATTACHMENT_SIZE: 50000,
  STRIPE_KEY: "pk_test_3ZzXQnkXHshCiViaxXuhqTr9",
  s3: {
    REGION: "us-east-1",
    BUCKET: "lullaby-baby-v2-v2-attachmentsbucket-12bdy8yzugyuz"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://seqvx47i08.execute-api.us-east-1.amazonaws.com/v2"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_tfn9thIKg",
    APP_CLIENT_ID: "6jabip9uv2vp32pbfskhaire59",
    IDENTITY_POOL_ID: "us-east-1:f26b6502-b0b4-4618-a893-38e6cc97a31b"
  }
};