resource "aws_vpc_peering_connection" "federation_peering" {
  peer_vpc_id   = var.peer_vpc_id
  vpc_id        = var.vpc_id
  auto_accept   = true

  tags = {
    Name = "multi-cloud-federation-peering"
  }
}

resource "aws_route" "federation_route" {
  route_table_id            = var.route_table_id
  destination_cidr_block    = var.peer_cidr_block
  vpc_peering_connection_id = aws_vpc_peering_connection.federation_peering.id
}
