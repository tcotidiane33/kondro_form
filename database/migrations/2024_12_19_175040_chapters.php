<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('chapters', function (Blueprint $table) {
            if (!Schema::hasColumn('chapters', 'course_id')) {
                // Ajouter la colonne course_id sans contrainte de clé étrangère
                $table->unsignedBigInteger('course_id')->nullable();
            }
        });

        // Mettre à jour les lignes existantes pour qu'elles aient une valeur course_id valide
        DB::table('chapters')->update(['course_id' => DB::table('courses')->first()->id]);

        Schema::table('chapters', function (Blueprint $table) {
            // Ajouter la contrainte de clé étrangère
            $table->foreign('course_id')->references('id')->on('courses')->onDelete('cascade')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('chapters', function (Blueprint $table) {
            if (Schema::hasColumn('chapters', 'course_id')) {
                $table->dropForeign(['course_id']);
                $table->dropColumn('course_id');
            }
        });
    }
};
