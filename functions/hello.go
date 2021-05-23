package main

import (
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	return &events.APIGatewayProxyResponse{
		StatusCode:        200,
		Headers:           map[string]string{"Content-Type": "application/json"},
		Body:              "Hello, World!",
	}, nil
}

func main() {
	// Make the handler available for Remote Procedure Call by AWS Lambda
	fmt.Println("Hello")
	lambda.Start(handler)
}