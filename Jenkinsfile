#!/usr/bin/env groovy
pipeline {
   agent any

   docker { image 'node:14-alpine' }

   environment {
       APPLITOOLS_API_KEY = 'SnesqlCsa5CqgzGnn99JOk3V105L2P109HN1bl2XcZ6yfDWs110'
       APPLITOOLS_BATCH_ID='${GIT_COMMIT}'
   }

   stages {
       stage('Checkout') {
           steps {
               checkout scm
           }
       }
       stage('Build & Test') {
           steps {
               script {
                   sh '''
                   node --version
                   npm install
                   npx eyes-storybook
                  '''
               }

           }


           post {
               success {
                   curl "https://api.GitHub.com/repos/poonamdahiya/EyesStorybook/statuses/$GIT_COMMIT?access_token=1d6b93cb67d0fb7f4b06e891a79b0890116360f4" - H "Content-Type: application/json" -X POST -d
                   "{\"state\": \"success\",\"context\": \"continuous-integration/jenkins\", \"description\": \"Jenkins\", \"target_url\": \"http://635e9c39303f.au.ngrok.io/job/Storybook%20Pipeline/$BUILD_NUMBER/console\"}"
               }

               failure {
                   curl "https://api.GitHub.com/repos/poonamdahiya/EyesStorybook/statuses/$GIT_COMMIT?access_token=1d6b93cb67d0fb7f4b06e891a79b0890116360f4" - H "Content-Type: application/json" -X POST -d
                   "{\"state\": \"failure\",\"context\": \"continuous-integration/jenkins\", \"description\": \"Jenkins\", \"target_url\": \"http://635e9c39303f.au.ngrok.io/Storybook%20Pipeline/$BUILD_NUMBER/console\"}"
               }
           }
       }
   }
}
