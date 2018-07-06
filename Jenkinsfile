pipeline {
    agent { dockerfile true }
    stages {
        stage('prepare-test') {
            steps {
                sh 'chmod +w nodejs && cd nodejs && npm install'
            }
        }
        stage('unit-test') {
            steps {
                sh 'cd nodejs && npm test'
            }
        }
        stage('clean workspace'){
            steps{
                cleanWs()
            }
        }
    }
}