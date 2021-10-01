// import store from "@/store/store.js";
// import router from "@/router.js";
const fs = require("fs");
const qr = require("@dobe/helix-qr-code");

export default {
  methods: {
    //Takes the userInformation object and the path to the user's Image and creates
    //The QRCode
    encodeToQRCode: async (userInformationObject, userImagePath) => {
      try {
        //making image into base64 string
        const imageBitmap = fs.readFileSync(userImagePath);
        let base64ImageString = Buffer.from(imageBitmap).toString("base64");
        //trimming white spaces
        base64ImageString = base64ImageString.replace(/\s+/g, "");

        //Changing the userInformation object to string
        const userInformationObjectString = JSON.stringify(
          userInformationObject
        );

        //Making the string to be encoded from both the user information and the image string
        const encodingString = `${base64ImageString} ${userInformationObjectString}`;
        await qr
          .encodeToBuffer(encodingString)
          .then((buf) => fs.writeFileSync("QRcode.png", buf));
      } catch (Error) {
        return Error;
      }
    },
    //Takes the QRCode path
    decodeQRCode: async (QRCodeImagePath) => {
      try {
        //Decoding the QRCode to string
        const bytes = fs.readFileSync(QRCodeImagePath);
        const decodeString = await qr.decodeFromBuffer(bytes);

        //Splitting the string in the space between the base64ImageString and the userInformationObjectString
        const [base64ImageString, userInformationObjectString] =
          decodeString.split(" ");

        //Making the Image from the buffer image and writing the Image
        const buffer = Buffer.from(base64ImageString, "base64");
        fs.writeFileSync("userImage.png", buffer);
        return JSON.parse(userInformationObjectString);
      } catch (Error) {
        return Error;
      }
    },
  },
};
