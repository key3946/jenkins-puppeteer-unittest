pipeline {
    agent { dockerfile true }
    environment{
        npm_config_cache=npm-cache
    }
    stages {
        stage('prepare-test') {
            environment{
                HOME='.'
            }
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