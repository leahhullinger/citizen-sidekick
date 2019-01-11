require("dotenv").config();
const AWS = require("aws-sdk");

// Amazon Transcribe - Speech to Text
module.exports = {
  audioTranscribe: (req, res, next) => {
    console.log(req.body);
    const { filename, filetype, s3_url } = req.body;
    const transcribeservice = new AWS.TranscribeService({
      endpoint: "https://transcribe.us-east-2.amazonaws.com",
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKay: process.env.AWS_SECRET_KEY
      // apiVersion: "2016-06-27"
    });

    var params = {
      LanguageCode: "en-US" /* required */,
      Media: {
        /* required */
        MediaFileUri: s3_url
      },
      MediaFormat: filetype,
      TranscriptionJobName: filename /* required */,
      // MediaSampleRateHertz: 0,
      OutputBucketName: "citizen-sidekick",
      Settings: {
        // ChannelIdentification: true || false,
        MaxSpeakerLabels: 2,
        ShowSpeakerLabels: true
      }
    };

    transcribeservice.startTranscriptionJob(params, function(err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else {
        return getTranscriptionJob(mediaFileUri);
      } // successful response
    });
  }
};
