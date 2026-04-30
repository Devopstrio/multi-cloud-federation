resource "aws_iam_openid_connect_provider" "federation_hub" {
  url = "https://${var.federation_domain}"

  client_id_list = [
    "sts.amazonaws.com",
  ]

  thumbprint_list = [var.oidc_thumbprint]
}

resource "aws_iam_role" "federated_role" {
  name = "multi-cloud-federated-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRoleWithWebIdentity"
        Effect = "Allow"
        Principal = {
          Federated = aws_iam_openid_connect_provider.federation_hub.arn
        }
        Condition = {
          StringEquals = {
            "${var.federation_domain}:sub" = var.allowed_subjects
          }
        }
      }
    ]
  })
}
