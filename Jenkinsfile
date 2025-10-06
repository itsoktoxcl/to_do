pipeline {

    agent any

    stages {

        stage('Build') {

            steps {

                script {

                    if (env.BRANCH_NAME == 'main') {

                        echo "Building the MAIN branch..."

                    } else if (env.BRANCH_NAME == 'second_phase') {

                        echo "Building the DEVELOP branch..."

                    } else {

                        echo "Skipping build for unsupported branch: ${env.BRANCH_NAME}"

                        currentBuild.result = 'SUCCESS'

                        return

                    }

                }

            }

        }

        stage('Deploy') {

            steps {

                script {

                    if (env.BRANCH_NAME == 'main') {

//Add your Deploy tasks/workflow here for main branch

                        echo "Deploying the MAIN branch..."

                    } else if (env.BRANCH_NAME == 'second_phase') {

 //Add your Deploy tasks/workflow here for develop branch

                        echo "Deploying the DEVELOP branch..."

                    }

                }

            }

        }

    }

}