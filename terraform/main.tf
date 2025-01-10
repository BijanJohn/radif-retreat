terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_s3_bucket" "video_bucket" {
  bucket = var.bucket_name

  tags = {
    Name        = "Radif Retreat Video Storage"
    Environment = "production"
    Project     = "radif-retreat"
  }
}

# Enable versioning for recovery of deleted videos
resource "aws_s3_bucket_versioning" "video_bucket_versioning" {
  bucket = aws_s3_bucket.video_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

# Configure CORS for video streaming
resource "aws_s3_bucket_cors_configuration" "video_bucket_cors" {
  bucket = aws_s3_bucket.video_bucket.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = ["*"] # Will be restricted to actual domain in production
    expose_headers  = ["ETag"]
    max_age_seconds = 3600
  }
}

# Enable server-side encryption
resource "aws_s3_bucket_server_side_encryption_configuration" "video_bucket_encryption" {
  bucket = aws_s3_bucket.video_bucket.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# Block public access
resource "aws_s3_bucket_public_access_block" "video_bucket_public_access" {
  bucket = aws_s3_bucket.video_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
