import { APIRequestContext } from '@playwright/test';

export class ApiHelpers {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // Repetitive GET API call
  async getAllObjects() {
    // Make HTTP GET request
    const response = await this.request.get('/objects');
    return response;
  }

  // Repetitive GET By Id API call
  async getObjectByID(id: String) {
    // Make HTTP GEY by ID request
    const response = await this.request.get('/objects/' + id);
    return response;
  }

  async postNewObject(productPayload: any) {
    // Make HTTP GEY by ID request
    const postResponse = await this.request.post('/objects', {
        data: productPayload
    });
    return postResponse;
  }

  async putObject(id: String, putPayload: any) {
    // Make HTTP PUT request
    const putResponse = await this.request.put('/objects/' + id, {
        data: putPayload    
    });
    return putResponse;
  }

  async deleteObject(id: String) {
    // Make HTTP GEY by ID request
    const deleteResponse = await this.request.delete('/objects/' + id);
    return deleteResponse;
  }
}
