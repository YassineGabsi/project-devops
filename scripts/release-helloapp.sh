#!/bin/bash
TAG=$1
export KUBECONFIG=$HOME/.kube/kubeconfig
export HELM_HOST=127.0.0.1:44134
result=$(eval helm ls | grep helloapp) 
if [ $? -ne "0" ]; then 
   helm install helloapp --timeout 180m  --set image.tag=$TAG charts/helloapp
else 
   helm upgrade --timeout 180m helloapp --set image.tag=$TAG charts/helloapp
fi
