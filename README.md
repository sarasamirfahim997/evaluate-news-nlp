# Project Introduction

I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
> concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
> process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

It would probably be good to first get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet. We won't need the service workers during development and having extra caches floating around just means there's more potential for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:

- `npm install`

## Setting up the API

the MeaningCloud API: You can find the API https://www.meaningcloud.com/. Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions.

### Step 1: Signup for an API key

First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

* Use npm or yarn to install the dotenv package `npm install dotenv`. This will allow us to use environment variables we set in a new file
* Create a new `.env` file in the root of your project
* Go to your .gitignore file and add `.env` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
* Fill the .env file with your API keys like this:

```
API_ID=**************************
API_KEY=**************************
```

* Add this code to the very top of your server/index.js file:

```
const dotenv = require('dotenv');
dotenv.config();
```

* Reference variables you created in the .env file by putting `process.env` in front of it, an example might look like this:

```
console.log(`Your API key is ${process.env.API_KEY}`);
```

### Step 5: Using the API

We're ready to go! To get a better idea about using the API you can take a look at (https://learn.meaningcloud.com/developer/summarization/1.0/doc).
