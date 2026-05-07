# Three-Tier Web Application with Kubernetes 🚀

A production-ready three-tier web application (To-Do App) containerized with Docker and deployed on AWS EKS using Kubernetes.

---

## 🏗️ Architecture

```
Users → ALB (Load Balancer)
         ├── /        → Frontend  (React + Nginx)
         └── /api     → Backend   (Node.js REST API)
                               └── MongoDB (Database)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Nginx |
| Backend | Node.js, Express |
| Database | MongoDB |
| Containerization | Docker |
| Container Registry | AWS ECR (Public) |
| Orchestration | Kubernetes |
| Cloud | AWS EKS |
| Load Balancer | AWS ALB (Application Load Balancer) |
| Infrastructure | Terraform |

---

## 📁 Project Structure

```
three-tier-eks-iac/
├── app/
│   ├── frontend/          # React app
│   │   ├── Dockerfile
│   │   └── src/
│   └── backend/           # Node.js API
│       └── Dockerfile
├── k8s/                   # Kubernetes manifests
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
│   ├── mongodb-deployment.yaml
│   └── ingress.yaml
└── terraform/             # Infrastructure as Code
```

---

## 🚀 What I Built

- ✅ Containerized React frontend using Docker with multi-stage builds (Nginx)
- ✅ Containerized Node.js backend API with Docker
- ✅ Pushed Docker images to AWS ECR Public Registry
- ✅ Deployed all three tiers to AWS EKS cluster
- ✅ Configured Kubernetes Deployments, Services, and Ingress
- ✅ Set up AWS ALB Ingress Controller for traffic routing
- ✅ Provisioned infrastructure using Terraform (IaC)

---

## 🔧 How to Deploy

### Prerequisites
- AWS CLI configured
- kubectl installed
- Docker installed
- Terraform installed

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/siddharthsathya83-bot/Three-tier-webapp-with-kubernetes-.git
cd Three-tier-webapp-with-kubernetes-
```

**2. Build and push Docker images**
```bash
# Frontend
docker build -t workshop-frontend:v1 ./app/frontend
docker tag workshop-frontend:v1 public.ecr.aws/<your-alias>/workshop-frontend:v1
docker push public.ecr.aws/<your-alias>/workshop-frontend:v1

# Backend
docker build -t workshop-backend:v1 ./app/backend
docker tag workshop-backend:v1 public.ecr.aws/<your-alias>/workshop-backend:v1
docker push public.ecr.aws/<your-alias>/workshop-backend:v1
```

**3. Apply Kubernetes manifests**
```bash
kubectl apply -f k8s/
kubectl get pods -n workshop
```

**4. Get the application URL**
```bash
kubectl get ingress -n workshop
```

---

## 📸 Application

A full-stack To-Do application where users can:
- ➕ Add tasks
- ✅ Mark tasks as complete
- 🗑️ Delete tasks

---

## 📚 Key Learnings

- Containerizing multi-tier applications with Docker
- Managing container images with AWS ECR
- Deploying and managing workloads on Kubernetes/EKS
- Configuring Kubernetes Ingress with AWS ALB
- Infrastructure as Code with Terraform
- Debugging real-world Kubernetes issues (ImagePullBackOff, CrashLoopBackOff, 502 errors)

---

## 👤 Author

**Siddharth** — [GitHub](https://github.com/siddharthsathya83-bot)
