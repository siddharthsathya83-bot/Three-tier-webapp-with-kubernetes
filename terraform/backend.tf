terraform {
  backend "s3" {
    bucket = "my-terra-state-bucket45687129"
    key    = "eks/terraform.tfstate"
    region = "us-west-2"
  }
}


