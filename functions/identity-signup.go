package main

import (
	"context"
	"fmt"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/service/lambda"
)

func handler(ctx context.Context, request events.APIGatewayProxyRequest)(*events.APIGatewayProxyResponse, error){
	for i:=0; i<10;i++{
		fmt.Println("i", i)
		time.Sleep(1 * time.Second)
	}
	fmt.Println("ctx: ", ctx)
	return nil, nil
}

func main(){
	lambda.Start(handler)
}