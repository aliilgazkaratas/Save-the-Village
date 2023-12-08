const request = require('supertest');
const app = require('../app'); // Assuming app.js contains your Express app

describe('Village Controller', () => {
  let createdVillageId; // To store the ID of the village created for testing purposes

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

    // Store the created village ID for use in other tests or cleanup
    createdVillageId = res.body._id;
  });

  it('should get all villages', async () => {
    const res = await request(app)
      .get('/api/villages');

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    // Assert on specific properties or length of villages array as needed
  });

  it('should get a specific village by ID', async () => {
    const res = await request(app)
      .get(`/api/villages/${createdVillageId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', createdVillageId);
    // Assert on specific properties or data of the retrieved village
  });

  it('should update a village by ID', async () => {
    const updatedData = {
      name: 'Updated Village Name',
      description: 'Updated description',
    };

    const res = await request(app)
      .put(`/api/villages/${createdVillageId}`)
      .send(updatedData);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', createdVillageId);
    expect(res.body.name).toEqual(updatedData.name);
    // Assert on other updated properties if needed
  });

  it('should delete a village by ID', async () => {
    const res = await request(app)
      .delete(`/api/villages/${createdVillageId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', createdVillageId);
    // Assert on other properties or check for deletion status
  });

  // Add more tests for edge cases, error handling, etc., as needed
});
