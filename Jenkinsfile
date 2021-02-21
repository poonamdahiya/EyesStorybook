#!/usr/bin/env groovy
pipeline {
    agent any
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

//        post {
//            success {
//                curl "https://api.GitHub.com/repos/<GitHubUserName>/<REPO_NAME>/statuses/$GIT_COMMIT?access_token=<YOUR_GITHUB_TOKEN>" -H "Content-Type: application/json" -X POST -d "{\"state\": \"success\",\"context\": \"continuous-integration/jenkins\", \"description\": \"Jenkins\", \"target_url\": \"<YOUR_JENKINS_URL>/job/<JenkinsProjectName>/$BUILD_NUMBER/console\"}"
//            }
//
//            failure {
//                curl "https://api.GitHub.com/repos/<GitHubUserName>/<REPO_NAME>/statuses/$GIT_COMMIT?access_token=<YOUR_GITHUB_TOKEN>" -H "Content-Type: application/json" -X POST -d "{\"state\": \"failure\",\"context\": \"continuous-integration/jenkins\", \"description\": \"Jenkins\", \"target_url\": \"<YOUR_JENKINS_URL>/job/<JenkinsProjectName>/$BUILD_NUMBER/console\"}"
//            }
//        }
    }
}
