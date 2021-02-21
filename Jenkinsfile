#!/usr/bin/env groovy
pipeline {
    agent any

    tools {nodejs "nodejs"}

    environment {
        APPLITOOLS_API_KEY = 'SnesqlCsa5CqgzGnn99JOk3V105L2P109HN1bl2XcZ6yfDWs110'
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

        post {
            success {
                curl "https://api.GitHub.com/repos/poonamdahiya/EyesStorybook/statuses/$GIT_COMMIT?access_token=d5d1366d4bbcd2499f112271c052e4c4e2cdcfee" -H "Content-Type: application/json" -X POST -d "{\"state\": \"success\",\"context\": \"continuous-integration/jenkins\", \"description\": \"Jenkins\", \"target_url\": \"http://635e9c39303f.au.ngrok.io/job/Storybook%20Pipeline/$BUILD_NUMBER/console\"}"
            }

            failure {
                curl "https://api.GitHub.com/repos/poonamdahiya/EyesStorybook/statuses/$GIT_COMMIT?access_token=d5d1366d4bbcd2499f112271c052e4c4e2cdcfee" -H "Content-Type: application/json" -X POST -d "{\"state\": \"failure\",\"context\": \"continuous-integration/jenkins\", \"description\": \"Jenkins\", \"target_url\": \"http://635e9c39303f.au.ngrok.io/Storybook%20Pipeline/$BUILD_NUMBER/console\"}"
            }
        }
    }
}
