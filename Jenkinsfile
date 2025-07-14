pipeline {
    agent any

    stages {
        stage('Clonar') {
            steps {
                git 'https://github.com/viniciusnejaimcastro/Projeto-Node.js.git'
            }
        }
        stage('Testar') {
            steps {
                sh 'chmod +x test.sh && ./test.sh'
            }
        }
        stage('Build') {
            steps {
                echo 'Simulando build...'
            }
        }
    }
}
