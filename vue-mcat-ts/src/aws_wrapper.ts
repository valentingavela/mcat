declare var AWS: any;

AWS.config.update({
    region: "us-east-1",
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: ''
    })
});

export default class AwsWrapper {
    s3 = new AWS.S3();
    public bucket = 'audios-bucket123';

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    async uploadObject(file:any, fileType: string = '') {
        const params = {
            Bucket: this.bucket,
            Key: `${this.uuidv4()}`,
            ContentType: file.type || fileType,
            Body: file,
            ACL: 'public-read'
        };

        await this.s3.putObject(params).promise();
    }

    public getKeys(MaxKeys = 10): Promise<any> {
        const params = {
            Bucket: this.bucket,
            MaxKeys: MaxKeys
        }
        return this.s3.listObjectsV2(params).promise();
    }
}
