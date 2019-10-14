resource "exoscale_compute" "impact_api_1" {
  affinity_groups = ["impact-api"]
  display_name    = "impact-api-1"
  template        = "Linux CoreOS 2135 64-bit"
  zone            = "ch-gva-2"
  size            = "Tiny"
  disk_size       = 10
  key_pair        = "exoscale-default"
  security_groups = ["impact-api"]
}
