import { test, expect, request } from '@playwright/test'
import { randomName, randomEmail } from '../utility/commons'

//This Test File helps new commers to understand how to do Basic API Testing using request fixture in Playwright
//This code can be enhanced more but this File is only for understanding purpose
//Anyone can download this script and utilize this 

let sid: any; //Declaring variable outside to utilize in different test (For API Chaining)

test('Create Student Resource', async () => {

    const res = await request.newContext();

    const response = await res.post('https://gorest.co.in/public/v2/users', {
        headers: {
            Authorization: 'Bearer f37e4aa1a88b77d33722080da1d92aef8b2897cbea86cc35ca23cfd21ff1ecbc', //Providing Bearer Token Authentication
            'Content-Type': 'application/json'
        },
        data: {
            "name": randomName(), //Generating random name for repeatability
            "email": randomEmail(), //Generating random email for repeatability
            "gender": "female",
            "status": "inactive"
        }
    })

    const output = await response.json();

    expect(response.status()).toBe(201);

    sid = output.id; //Storing in Global variable to utilize in different test and to compare 

})

test('Getting Student Resource', async () => {

    const req = await request.newContext();

    const output = await req.get(`https://gorest.co.in/public/v2/users/${sid}`, { //Utilizing sid in different test
        headers: {
            Authorization: 'Bearer f37e4aa1a88b77d33722080da1d92aef8b2897cbea86cc35ca23cfd21ff1ecbc',
            'Content-Type': 'application/json'
        }
    }
    )

    expect(output.status()).toBe(200)

    const res = await output.json();

    expect(sid).toEqual(res.id); //Comparing

})

test('Deleting Created Student Resource', async () => {

    const req = await request.newContext();

    const output = await req.delete(`https://gorest.co.in/public/v2/users/${sid}`, { //Utilizing sid in different test
        headers: {
            Authorization: 'Bearer f37e4aa1a88b77d33722080da1d92aef8b2897cbea86cc35ca23cfd21ff1ecbc',
            'Content-Type': 'application/json'
        }
    }
    )

    expect(output.status()).toBe(204)

})