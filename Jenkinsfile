#!/usr/bin/env groovy
pipeline {
   agent {dockerfile true}

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

       }
   }
}
