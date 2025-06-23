https://otus.pw/3uPj/
















































Что такое скалирование приложений/веб-серверов?

- Вертикальное.

Что мы делаем при вертикальном масштабировании?
Мощность и количество CPU/memory/disc space.

1-2 CPU -> либо взять более мощные, либо увеличить количество.
memory -> 4Gb -> 32Gb

Увеличили 2CPU в два раза, это не значит, что x2.

- Горизонтальное.

Начинаем докидывать дополнительные сервера.

То есть был 1 сервер -> 2 и т.д.



































https://github.com/nlapshin/nodejs-k8s


minikube ip
minikube start
minikube stop
minikube status

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f service-balancer.yaml

kubectl get svc <service>

kubectl scale deployment nodejs-simple-deployment --replicas=0

http://192.168.59.100:31270

kubectl get deployments
kubectl get statefulsets
kubectl get replicationcontrollers

kubectl scale deployment nodejs-simple-deployment --replicas=3

kubectl get pods
kubectl logs <pod-name>

kubectl delete deployment <deployment-name>
