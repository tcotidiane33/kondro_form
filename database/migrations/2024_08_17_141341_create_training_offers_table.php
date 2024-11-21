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
        Schema::create('training_offers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('instructor_id')->constrained('users')->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->decimal('price', 8, 2);
            $table->string('status')->default('pending');
            $table->string('subscription_type')->nullable();
            $table->string('access_level')->nullable();
            $table->integer('duration_months')->nullable();
            $table->integer('max_participants')->nullable();
            $table->json('features')->nullable();
            $table->json('platforms')->nullable();
            $table->json('technologies')->nullable();
            $table->foreignId('certification_id')->nullable()->constrained('certifications')->onDelete('set null');
            $table->datetime('start_date')->nullable();
            $table->datetime('end_date')->nullable();
            $table->boolean('is_live_event')->default(false);
            $table->json('additional_materials')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('training_offers');
    }
};
