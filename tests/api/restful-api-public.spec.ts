import { test } from "@playwright/test";
import { ApiHelpers } from "../../src/utils/api-helpers";
import * as apiAssert from "../../src/utils/api-assertions";
import testDataOne from '../data/productWithIdOne.json';
import postPayload from '../data/postPayload.json';
import putPayload from '../data/putPayload.json';

let apiUtils: ApiHelpers;

test.beforeEach(async ({ request }) => {
    // Initialize the utility with PW's request context
    apiUtils = new ApiHelpers(request);
});

test('Should get all Objects', { tag: '@get' } , async ({ request }) => {
    // Make HTTP request
    const response = await apiUtils.getAllObjects();

    await apiAssert.assertSuccessResponse(response);
    await apiAssert.assertHeaderContentTypeAsJSON(response);
    await apiAssert.assertGetAllObjectResponseBody(response);
    await apiAssert.assertGetAllResponseBody(response, testDataOne);
});

test('Should get a Single Object By Id', { tag: '@get' } , async ({ request }) => {
    // Make HTTP request
    const response = await apiUtils.getObjectByID('1');

    await apiAssert.assertSuccessResponse(response);
    await apiAssert.assertHeaderContentTypeAsJSON(response);
    await apiAssert.assertGetByIdResponseBody(response, testDataOne);
});

test('Insert new Product and then delete', { tag: ['@post', '@delete'] }, async ({ request }) => {
    // Make HTTP POST request
    const postResponse = await apiUtils.postNewObject(postPayload);
    const postResponseBody = await postResponse.json();

    await apiAssert.assertSuccessResponse(postResponse);
    await apiAssert.assertProductName(postResponse, postPayload);

    //Get the id of new product
    const productId = postResponseBody.id;

    // Make HTTP GET request to verify inserted data
    const getByIdResponse = await apiUtils.getObjectByID(productId);
    await apiAssert.assertProductName(getByIdResponse, postPayload);

    // Make HTTP DELETE request
    const deleteResponse = await apiUtils.deleteObject(productId);
    await apiAssert.assertDeleteProduct(deleteResponse, productId);
});

test('Insert new Product, Update an existing product, and then delete', { tag: ['@post', '@put', '@delete'] }, async ({ request }) => {
    // Make HTTP POST request
    const postResponse = await apiUtils.postNewObject(postPayload);
    const postResponseBody = await postResponse.json();

    await apiAssert.assertSuccessResponse(postResponse);
    await apiAssert.assertProductName(postResponse, postPayload);

    //Get the id of new product
    const productId = postResponseBody.id;

    // Make HTTP PUT request
    const putResponse = await apiUtils.putObject(productId, putPayload);
    await apiAssert.assertPutResponse(productId, putResponse, putPayload);

    // Make HTTP GET request to verify inserted data
    const getByIdResponse = await apiUtils.getObjectByID(productId);
    await apiAssert.assertProductName(getByIdResponse, putPayload);

    // Make HTTP DELETE request
    const deleteResponse = await apiUtils.deleteObject(productId);
    await apiAssert.assertDeleteProduct(deleteResponse, productId);

});