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
        Schema::create('pause_times', function (Blueprint $table) {
            $table->id();
            $table->string('google_calender_id')->nullable();
          
            $table->string('day')->nullable();
            $table->string('start_pouse')->nullable();
            $table->string('end_pouse')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pause_times');
    }
};
