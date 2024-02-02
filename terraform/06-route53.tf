resource "aws_route53_record" "meu_registro" {
  name    = "deyzito.cloud"
  type    = "A"
  zone_id = var.zone_id

  alias {
    name                   = aws_cloudfront_distribution.cloudfront.domain_name
    zone_id               = aws_cloudfront_distribution.cloudfront.hosted_zone_id
    evaluate_target_health = false
  }
}