declare var AWS: any;

AWS.config.update({
    region: 'us-east-1',
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:4647cf86-5538-46b0-bfbc-a71f781567e1',
    }),
});

export class AwsWrapper {
    public bucket: string;
    private s3 = new AWS.S3();


    constructor(bucket: string) {
        this.bucket = bucket;
    }

    public async uploadObject(file: any) {
        const params = {
            Bucket: this.bucket,
            Key: this.uuidv4(),
            ContentType: file.type,
            Body: file,
            ACL: 'public-read',
        };

        return this.s3.putObject(params, (err: any, res: any) => { });
    }

    private truncated = false;
    private continuationToken = '';

    public async getKeys(params: any, keys: any) {
        const response = await this.s3.listObjectsV2(params).promise();
        response.Contents.forEach((obj: any) => keys.push(obj));
        
        if (response.IsTruncated) {
            this.truncated = true;
            this.continuationToken = params.ContinuationToken;
        }
        //     const newParams = Object.assign({}, params);
        //     newParams.ContinuationToken = response.NextContinuationToken;
        //     await this.getKeys(newParams, keys); // RECURSIVE CALL
        // }
    }

    get isTruncated() {
        return {
            truncated: this.truncated,
            continuationToken: this.continuationToken
        }
    }

    public async deleteObject(objKey: string) {
        const params = {
            Bucket: this.bucket,
            Key: objKey,
        };
        await this.s3.deleteObject(params).promise();
    }

    private uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
