resource "exoscale_affinity" "impact_api" {
  name = "impact-api"
}

resource "exoscale_security_group" "impact_api" {
  name = "impact-api"
}

resource "exoscale_security_group_rules" "impact_api" {
  security_group = "impact-api"
  ingress {
    protocol  = "TCP"
    ports     = [22, 80, 443]
    cidr_list = ["0.0.0.0/0"]
  }
}

resource "exoscale_nic" "impact_api_1" {
  compute_id = "${exoscale_compute.impact_api_1.id}"
  network_id = "${var.exoscale_network_impact_db_id}"
  ip_address = "10.0.0.4"
}
