# Aisensum Chart API Spec

## Endpoints:

### Get Segment Chart Points

`GET /v1/segment-chart`

Query Parameters:

Filter by criteria:

`?criteriaUuid=48da8862-3250-11eb-adc1-0242ac120002`

Filter by type:

`?typeUuid=bc384c62-3251-11eb-adc1-0242ac120002`

Limit number of points (default is 8):

`?limit=10`

```JSON
{
  "data": [
    {
      "id": 393,
      "uuid": "168c7781-28e9-4eb6-bd4e-82004e7f8e4a",
      "createdBy": "2020-11-30T18:47:56.873Z",
      "updatedBy": "2020-11-30T18:47:56.873Z",
      "timeline": "Aug(Week 1)",
      "index": 67.53,
      "criteriaUuid": "48da8862-3250-11eb-adc1-0242ac120002",
      "typeUuid": "bc384c62-3251-11eb-adc1-0242ac120002"
    },
    {
      "id": 394,
      "uuid": "526b9ade-853f-4712-9f44-61fb0a174ee8",
      "createdBy": "2020-11-30T18:47:56.873Z",
      "updatedBy": "2020-11-30T18:47:56.873Z",
      "timeline": "Aug(Week 2)",
      "index": 19.1,
      "criteriaUuid": "48da8862-3250-11eb-adc1-0242ac120002",
      "typeUuid": "bc384c62-3251-11eb-adc1-0242ac120002"
    },
    {
      "id": 395,
      "uuid": "399cd25a-8135-40da-822d-2e7ab8320141",
      "createdBy": "2020-11-30T18:47:56.873Z",
      "updatedBy": "2020-11-30T18:47:56.873Z",
      "timeline": "Aug(Week 3)",
      "index": 67.9,
      "criteriaUuid": "48da8862-3250-11eb-adc1-0242ac120002",
      "typeUuid": "bc384c62-3251-11eb-adc1-0242ac120002"
    }
  ]
}
```

### Get List Segment Criteria

`GET /v1/segment-criterias`

Query Parameters:

Limit number of points (default is 8):

`?limit=10`

```JSON
{
  "data": [
    {
      "id": 1,
      "uuid": "48da8862-3250-11eb-adc1-0242ac120002",
      "createdBy": "2020-11-30T18:44:44.216Z",
      "updatedBy": "2020-11-30T18:44:44.216Z",
      "name": "Sales Trends"
    },
    {
      "id": 2,
      "uuid": "48da8aba-3250-11eb-adc1-0242ac120002",
      "createdBy": "2020-11-30T18:44:44.216Z",
      "updatedBy": "2020-11-30T18:44:44.216Z",
      "name": "Product"
    }
  ]
}
```


### Get List Segment Type

`GET /v1/segment-types`

Query Parameters:

Limit number of points (default is 8):

`?limit=10`

```JSON
{
  "data": [
    {
      "id": 1,
      "uuid": "bc384c62-3251-11eb-adc1-0242ac120002",
      "createdBy": "2020-11-30T18:44:44.398Z",
      "updatedBy": "2020-11-30T18:44:44.398Z",
      "name": "Sales"
    },
    {
      "id": 2,
      "uuid": "bc384fa0-3251-11eb-adc1-0242ac120002",
      "createdBy": "2020-11-30T18:44:44.398Z",
      "updatedBy": "2020-11-30T18:44:44.398Z",
      "name": "Quantity"
    }
  ]
}
```
