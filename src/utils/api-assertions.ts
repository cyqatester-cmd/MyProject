import { expect, APIResponse } from '@playwright/test';

// Reusable assertion for a successful JSON response
// export async function assertSuccessResponse(response: APIResponse, expectedData: object) {
export async function assertSuccessResponse(response: APIResponse) {
    // Check status code
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
}

export async function assertHeaderContentTypeAsJSON(response: APIResponse) {
    // Check headers
    expect(response.headers()['content-type']).toContain('application/json');
}

export async function assertGetAllObjectResponseBody(response: APIResponse) {
    
    // Parse JSON response
    const responseBody = await response.json();
    
    // console.log(responseBody);
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);
}

export async function assertGetAllResponseBody(response: APIResponse, jsonInputData: any) {
    
    // Parse JSON response
    const responseBody = await response.json();
    
    //find product by id = 1 from the response
    const product = responseBody.find((item: any) => item.id === jsonInputData.id);

    // console.log('jsonInputData ID: ' + jsonInputData.id)

    expect(product.id).toBe(jsonInputData.id);
    expect(product.name).toBe(jsonInputData.name);
    expect(product.data.color).toBe(jsonInputData.data.color);
    expect(product.data.capacity).toBe(jsonInputData.data.capacity);
}

export async function assertGetByIdResponseBody(response: APIResponse, jsonInputData: any) {
    
    // Parse JSON response
    const responseBody = await response.json();
    
    // console.log('responseBody ID: ' + responseBody.id)
    // console.log('jsonInputData ID: ' + jsonInputData.id)

    expect(responseBody.id).toBe(jsonInputData.id);
    expect(responseBody.name).toBe(jsonInputData.name);
    expect(responseBody.data.color).toBe(jsonInputData.data.color);
    expect(responseBody.data.capacity).toBe(jsonInputData.data.capacity);
}

export async function assertProductName(response: APIResponse, jsonInputData: any) {
    
    // Parse JSON response
    const responseBody = await response.json();
    
    // console.log('responseBody Name: ' + responseBody.name)
    // console.log('jsonInputData Name: ' + jsonInputData.name)

    expect(responseBody.name).toBe(jsonInputData.name);
}

export async function assertDeleteProduct(response: APIResponse, productId: String) {
    // Parse JSON response
    const deleteResponseBody = await response.json();
    console.log(deleteResponseBody);
    expect(deleteResponseBody.message).toBe('Object with id = ' + productId + ' has been deleted.');
}

export async function assertPutResponse(id: String, response: APIResponse, jsonInputData: any) {
    
    // Parse JSON response
    const putResponseBody = await response.json();

    expect(putResponseBody.id).toBe(id);
    expect(putResponseBody.name).toBe(jsonInputData.name);
    expect(putResponseBody.data.price).toBe(jsonInputData.data.price);
    expect(putResponseBody).toHaveProperty('updatedAt');
}