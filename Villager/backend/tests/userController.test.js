const request = require('supertest');
const app = require('../app'); // Assuming app.js contains your Express app

describe('Village Controller', () => {
  let createdVillageId;

  it('should create a new village', async () => {
    const newVillageData = {
      name: 'Sample Village',
      description: 'A test village',
    };

    const res = await request(app)
      .post('/api/villages')
      .send(newVillageData);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toEqual(newVillageData.name);

    createdVillageId = res.body._id; // Store the created village ID
  });

  it('should get all villages', async () => {
    const res = await request(app)
      .get('/api/villages');

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    // Add more specific assertions based on the response data structure
  });

  it('should update a village by ID', async () => {
    const updatedVillageData = {
      name: 'Updated Village Name',
      description: 'Updated description',
    };

    const res = await request(app)
      .put(`/api/villages/${createdVillageId}`)
      .send(updatedVillageData);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', createdVillageId);
    expect(res.body.name).toEqual(updatedVillageData.name);
    // Add more assertions for the updated village data
  });

  it('should delete a village by ID', async () => {
    const res = await request(app)
      .delete(`/api/villages/${createdVillageId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', createdVillageId);
    // Add more assertions or check for deletion status if required
  });

  // Add additional tests for edge cases, error handling, etc.
});
