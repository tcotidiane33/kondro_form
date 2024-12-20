<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            // $table->string('name_bn')->nullable();
            $table->string('contact')->nullable();
            // $table->string('contact_bn')->nullable();
            $table->string('email')->unique();
            $table->date('date_of_birth')->nullable();
            $table->enum('gender', ['homme', 'femme', 'autre'])->nullable();
            $table->string('image')->nullable();
            $table->text('bio')->nullable();
            $table->string('profession')->nullable();
            $table->string('nationality')->default('ivoirienne')->nullable();
            $table->text('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('postcode')->nullable();
            $table->string('country')->nullable();
            $table->boolean('status')->default(1)->comment('1 active, 0 inactive');
            $table->string('password');
            $table->string('language')->default('fr')->comment('en = english, fr = français');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
