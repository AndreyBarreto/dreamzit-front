variable "certificate_arn" {
  type    = string 
  default = "arn:aws:acm:us-east-1:510019876265:certificate/a19066ab-5821-4ab4-a8ac-beb55d90747d"
}
variable "zone_id" {
  type    = string
  default = "Z02774262Z1ZW24THSUE5"
  }

variable "region" {
  type    = string
  default = "us-east-1"
}

variable "s3_bucket_name" {
  type    = string
  default = "dreamzit"
}

variable "root_domain_name" {
  type    = string
  default = "deyzito.cloud"
}
variable "sub_domain_name" {
  type    = string
  default = "*.deyzito.cloud"
}
variable "cloudfront_allowed_methods" {
  default = ["GET", "HEAD"]
  type    = list(string)
}
variable "cloudfront_cached_methods" {
  default = ["GET", "HEAD"]
  type    = list(string)
}