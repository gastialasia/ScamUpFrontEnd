
import { Card, Col, Text } from "@nextui-org/react";

export default function MemberCard({ url, name, role }) {
  return (
    <Card isHoverable>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={url}
          objectFit="cover"
          width="100%"
          height={250}
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: "flex-start" }}>
        <Col wrap="wrap" justify="space-between" align="center">
          <Text><b>{name}</b></Text>
          <Text>{role}</Text>
        </Col>
      </Card.Footer>
    </Card>
  )
}