const unirest = require("unirest");

module.exports = async (req, res) => {
    let review = req.body.review
    console.log("Predicting review: ")
    console.log(review)
    console.log(`${process.env.PREDICTION_SERVER}/predApi/v1.0/deployments/${process.env.DEPLOYMENT_ID}/predictions`)

    let response = await unirest.post(`${process.env.PREDICTION_SERVER}/predApi/v1.0/deployments/${process.env.DEPLOYMENT_ID}/predictions`)
    .headers({
        "Authorization": `Bearer ${process.env.API_KEY}`,
        "datarobot-key": process.env.DATAROBOT_KEY
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
