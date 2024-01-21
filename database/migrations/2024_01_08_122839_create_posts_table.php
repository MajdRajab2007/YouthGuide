<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\CodingLanguage;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            
            $table->id();
            $table->timestamps();
            $table->string('title');
            $table->text('body');
            $table->text('review');
            $table->foreignId('tag_name');
            $table->foreignId('team_name');
            $table->string('image')->nullable();
            $table->foreignId('coding_language_name')->nullable();
            $table->foreignId('design_type_name')->nullable();


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
