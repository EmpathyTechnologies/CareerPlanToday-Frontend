import { Amplify } from "aws-amplify";

function configAmplify() {
    Amplify.configure({
        Auth: {
          region: "",
          userPoolId: "",
          userPoolWebClientId: "",
        },
      });
}

export default configAmplify;