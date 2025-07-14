pipeline {
    agent any

    stages {
        stage('Clonar') {
            steps {
                git branch: 'main', url: 'https://github.com/viniciusnejaimcastro/Projeto-Node.js.git'
            }
        }
        stage('Build e Testes') {
            steps {
                script {
                    docker.image('node:18').inside {
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
    }
}
