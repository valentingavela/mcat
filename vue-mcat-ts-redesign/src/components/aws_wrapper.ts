declare var AWS: any;

AWS.config.update({
    region: "us-east-1",
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: ''
    })
});

export default class AwsWrapper {
    s3 = new AWS.S3();
    
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    async uploadObject(file:any) {
        const params = {
            Bucket: 'audios-bucket123',
            Key: this.uuidv4(),
            ContentType: file.type,
            Body: file,
            ACL: 'public-read'
        };

        return this.s3.putObject(params, (err:any, res:any) => {});
    }
}