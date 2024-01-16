import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {  Card, Image , CardMeta,
  CardHeader,
  Icon ,
  Button,
  CardDescription,
  CardContent } from 'semantic-ui-react'
import ProductService from "../services/productServices.js";

export default function ProductDetail() {
  let {id} = useParams();

  const [product, setProduct] = useState({});


  return (
    <div>
      {id}
      <Card fluid>
      <CardContent>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <CardHeader>Jenny Lawrence</CardHeader>
        <CardMeta>New User</CardMeta>
        <CardDescription>
          Jenny requested permission to view your contact details
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </CardContent>
  </Card>
    </div>
  );
}