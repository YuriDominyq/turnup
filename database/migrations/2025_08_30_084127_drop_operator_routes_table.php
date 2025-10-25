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
       Schema::dropIfExists('operator_routes');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('operator_routes', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('operator_id')->constrained('admins')->onDelete('cascade');
            $table->foreignId('route_id')->constrained('routes')->onDelete('cascade');
            $table->timestamps();
        });
    }
};
