pipeline {
    agent any

    stages {
        stage('Clonar') {
            steps {
                git branch: 'main', url: 'https://github.com/viniciusnejaimcastro/Projeto-Node.js.git'
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
