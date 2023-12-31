import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/productService";
import { Button, Card, Image } from 'semantic-ui-react'

export default function ProductDetail() {
  let { name } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService()
    productService.getById(product.productId).then(result=>setProduct(result.data.data))
  },[])

  return (
    <div>
      <Card.Group>
        <Card flued>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{product.producId}</Card.Header>
            {/*<Card.Meta>{product.category.categoryId}</Card.Meta>*/}
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}