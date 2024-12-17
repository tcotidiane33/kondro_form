<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
uses(TestCase::class, RefreshDatabase::class)->in('Feature');




test('renders MultiStepForm component', function () {
    $response = $this->get('/multi-step-form');
    $response->assertStatus(200);
    $response->assertSee('Créer un Cours');
});

test('navigates to next step', function () {
    $response = $this->post('/multi-step-form/next', ['currentStep' => 1]);
    $response->assertStatus(200);
    $response->assertSee('Précédent');
});

test('navigates to previous step', function () {
    $response = $this->post('/multi-step-form/previous', ['currentStep' => 2]);
    $response->assertStatus(200);
    $response->assertSee('Suivant');
});

test('submits the form', function () {
    $formData = [
        'title' => 'Test Course',
        'description' => 'Test Description',
        'price' => 100,
        'old_price' => 150,
        'subscription_price' => 50,
        'lessons' => [],
        'chapters' => [],
        'quizzes' => [],
        'course_code' => 'TEST123'
    ];
    $response = $this->post('/multi-step-form/submit', $formData);
    $response->assertStatus(200);
    $response->assertSee('Form submitted successfully');
});

test('handles input change', function () {
    $response = $this->post('/multi-step-form/update', ['field' => 'title', 'value' => 'New Course Title']);
    $response->assertStatus(200);
    $response->assertJson(['title' => 'New Course Title']);
});

test('adds a new chapter', function () {
    $response = $this->post('/multi-step-form/add-chapter');
    $response->assertStatus(200);
    $response->assertJson(['message' => 'Chapter added successfully']);
});

test('adds a new lesson', function () {
    $response = $this->post('/multi-step-form/add-lesson');
    $response->assertStatus(200);
    $response->assertJson(['message' => 'Lesson added successfully']);
});

test('adds a new quiz', function () {
    $response = $this->post('/multi-step-form/add-quiz');
    $response->assertStatus(200);
    $response->assertJson(['message' => 'Quiz added successfully']);
});
