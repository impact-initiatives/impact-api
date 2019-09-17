variable "key" {}
variable "secret" {}

variable "exoscale_network_impact_db_id" {}

provider "exoscale" {
  key    = "${var.key}"
  secret = "${var.secret}"
}

