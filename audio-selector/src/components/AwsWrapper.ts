declare var AWS: any;

AWS.config.update({
    region: 'us-east-1',
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:3c1bd43f-db52-40ff-85fb-9fe8737c2f5c',
    }),
});

export default class AwsWrapper {
    private s3 = new AWS.S3();

    public async uploadObject(file: any) {
        const params = {
            Bucket: 'audios-bucket123',
            Key: this.uuidv4(),
            ContentType: file.type,
            Body: file,
            ACL: 'public-read',
        };

        return this.s3.putObject(params, (err: any, res: any) => { });
    }

    public getObjects() {
        const params = {
            Bucket: 'audios-bucket123',
            MaxKeys: 2,
        };
        this.s3.listObjectsV2(params, (err: any, data: any) => {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data);           // successful response
        });
    }

    private uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
