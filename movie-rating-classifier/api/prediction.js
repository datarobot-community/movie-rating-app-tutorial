const unirest = require("unirest");
const env = require("./_env")

module.exports = async (req, res) => {
    let review = req.body.review
    console.log("Predicting review: ")
    console.log(review)

    let response = await unirest.post(`${env.PREDICTION_SERVER}/predApi/v1.0/deployments/${env.DEPLOYMENT_ID}/predictions`)
    .headers({
        "Authorization": `Bearer ${env.API_KEY}`,
        "datarobot-key": env.DATAROBOT_KEY
    })
    .type('json')
    .send(
        [{
        "review": review
    }]
    )
    console.log("Got response:")
    console.log(response.body.data)
    
    res.send({prediction: response.body.data[0].prediction})
}