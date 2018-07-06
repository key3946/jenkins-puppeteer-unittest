pipeline {
    agent { dockerfile true }
    stages {
        stage('prepare-test') {
            steps {
                sh 'chmod 777 nodejs && cd nodejs && sudo npm install'
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