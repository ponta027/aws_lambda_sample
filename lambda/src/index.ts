import * as sample from './sample';
exports.handler = async (event:any) => {
return         sample.f1();
/*
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda! CLI'),
    };
    return response;
 */
};

