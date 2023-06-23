import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_kEX3kYbsi",
  ClientId: "c96himt5jc7bf16j0vt869rvk",
};

export default new CognitoUserPool(poolData);
