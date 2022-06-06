# Tutorial - Movie Rating Predictor and Classifier

A tutorial for how build a web application that uses DataRobot to classify movie ratings by audiences.
Demo: https://movie-rating-classifier-psi.vercel.app

The app lets you rate the movie and uses ML to clasify your rating in either positive or negative - Rotten Tomatoes style. <br/>
It uses DataRobot to create the ML model, deploy it, and expose it as a prediction API, and the movie database taken from from RapidApi. <br/>
The movies you can rate are taken from IMDB's top 250 movies of all time.

## Requirements 

- You will need a [DataRobot](datarobot.com) account and access to deployments. You can apply for a DataRobot trial account using this link: https://www.datarobot.com/lp/trial/.

- To deploy, you can use the free [Vercel Now](https://vercel.com/now).

## Usage

To follow along the tutorial check out the `start_exercise` branch.
To see the finished application check out the `complete` branch.

If using the `complete` branch, replace the values in `movie-rating-classifier/.env.example` with your values from your DataRobot installation and save it as `movie-rating-classifier/.env`. Do not commit this file to git!

- Run `vercel` to deploy
- Run `vercel dev` to run locally

## Repository Contents

- `movie-rating-classifier/` - The React app and 2 serverless functions, ready to be deployed to the [Vercel now](https://vercel.com/now) or similar service.
- `resources/IMDB_Dataset.csv` - The training dataset -  taken taken from [Kaggle](https://www.kaggle.com/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews) and originated in the  the [2011 ACL paper - Learning Word Vectors for Sentiment Analysis](http://ai.stanford.edu/~amaas/data/sentiment/).

## Development and Contributing

If you'd like to report an issue or bug, suggest improvements, or contribute code to this project, please refer to [CONTRIBUTING.md](CONTRIBUTING.md).

# Code of Conduct

This project has adopted the Contributor Covenant for its Code of Conduct. 
See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) to read it in full.

# License

Licensed under the Apache License 2.0. 
See [LICENSE](LICENSE) to read it in full.


