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
        Schema::create('aulas', function (Blueprint $table) {
            $table->id();
            $table->enum('dia', ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'contra_turno']);
            $table->enum('turno', ['primeiro', 'segundo', 'sem_turno']);
            $table->string('sala');
            $table->string('classroom')->nullable();
            $table->foreignId('materia_id')->constrained('materias'); // FK DE MATERIA
            $table->foreignId('turma_id')->constrained('turmas'); // FK DE TURMA
            $table->foreignId('professor_id')->constrained('professores')->nullable(); // FK DE PROFESSOR
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aulas');
    }
};
