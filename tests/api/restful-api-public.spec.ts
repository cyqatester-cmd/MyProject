import { test } from "@playwright/test";
import { ApiHelpers } from "../../src/utils/api-helpers";
import { assertDeleteProduct, 
        assertGetAllObjectResponseBody, 
        assertGetAllResponseBody, 
        assertGetByIdResponseBody, 
        assertHeaderContentTypeAsJSON, 
        assertProductName, 
        assertPutResponse, assertSuccessResponse } from "../../src/utils/api-assertions";
import testDataOne from '../data/productWithIdOne.json';
import postPayload from '../data/postPayload.json';
import putPayload from '../data/putPayload.json';

let apiUtils: ApiHelpers;

test.beforeEach(async ({ request }) => {
    // Initialize the utility with PW's request context
    apiUtils = new ApiHelpers(request);
});

test('GET - Should get all Objects', { tag: '@rest-api' } , async ({ request }) => {
    // Make HTTP request
    const response = await apiUtils.getAllObjects();

    await assertSuccessResponse(response);
    await assertHeaderContentTypeAsJSON(response);
    await assertGetAllObjectResponseBody(response);
    await assertGetAllResponseBody(response, testDataOne);
});

test('GET - Should get a Single Object By Id', async ({ request }) => {
    // Make HTTP request
    const response = await apiUtils.getObjectByID('1');
    const responseBody = await response.json();

    await assertSuccessResponse(response);
    await assertHeaderContentTypeAsJSON(response);
    await assertGetByIdResponseBody(response, testDataOne);
});

test('POST & DELETE - Insert new Product and then delete', async ({ request }) => {
    // Make HTTP POST request
    const postResponse = await apiUtils.postNewObject(postPayload);
    const postResponseBody = await postResponse.json();

    await assertSuccessResponse(postResponse);
    await assertProductName(postResponse, postPayload);

    //Get the id of new product
    const productId = postResponseBody.id;

    // Make HTTP GET request to verify inserted data
    const getByIdResponse = await apiUtils.getObjectByID(productId);
    await assertProductName(getByIdResponse, postPayload);

    // Make HTTP DELETE request
    const deleteResponse = await apiUtils.deleteObject(productId);
    await assertDeleteProduct(deleteResponse, productId);
});

test('POST, PUT, & DELETE - Insert new Product and then delete', async ({ request }) => {
    // Make HTTP POST request
    const postResponse = await apiUtils.postNewObject(postPayload);
    const postResponseBody = await postResponse.json();

    await assertSuccessResponse(postResponse);
    await assertProductName(postResponse, postPayload);

    //Get the id of new product
    const productId = postResponseBody.id;

    // Make HTTP PUT request
    const putResponse = await apiUtils.putObject(productId, putPayload);
    await assertPutResponse(productId, putResponse, putPayload);

    // Make HTTP GET request to verify inserted data
    const getByIdResponse = await apiUtils.getObjectByID(productId);
    await assertProductName(getByIdResponse, putPayload);

    // Make HTTP DELETE request
    const deleteResponse = await apiUtils.deleteObject(productId);
    await assertDeleteProduct(deleteResponse, productId);

});