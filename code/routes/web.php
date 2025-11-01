<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\MateriaController;
use App\Http\Controllers\TurmaController;
use App\Http\Controllers\SolicitacaoController;
use App\Http\Controllers\AulaController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    
    Route::get('/', function () {
        return redirect()->route('dashboard');
    })->name('home');

    Route::middleware(['acesso'])->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');

        Route::prefix('usuarios')->group(function () {
            Route::get('/', [UserController::class, 'index'])->name('usuariosIndex');
            Route::post('/', [UserController::class, 'store'])->name('usuariosStore');
            Route::put('/{usuario}', [UserController::class, 'update'])->name('usuariosUpdate');
            Route::delete('/{usuario}', [UserController::class, 'destroy'])->name('usuariosDestroy');
        });

        Route::prefix('materias')->group(function () {
            Route::get('/', [MateriaController::class, 'index'])->name('materiasIndex');
            Route::post('/', [MateriaController::class, 'store'])->name('materiasStore');
            Route::put('/{materia}', [MateriaController::class, 'update'])->name('materiasUpdate');
            Route::delete('/{materia}', [MateriaController::class, 'destroy'])->name('materiasDestroy');
        });

        Route::prefix('turmas')->group(function () {
            Route::get('/', [TurmaController::class, 'index'])->name('turmasIndex');
            Route::post('/', [TurmaController::class, 'store'])->name('turmasStore');
            Route::get('/{turma}', [TurmaController::class, 'show'])->name('turmasShow');
            Route::put('/{turma}', [TurmaController::class, 'update'])->name('turmasUpdate');
            Route::delete('/{turma}', [TurmaController::class, 'destroy'])->name('turmasDestroy');

            Route::prefix('{turma}/aulas')->group(function () {
                Route::post('/', [AulaController::class, 'store'])->name('aulasStore');
                Route::put('/{aula}', [AulaController::class, 'update'])->name('aulasUpdate');
                Route::delete('/{aula}', [AulaController::class, 'destroy'])->name('aulasDestroy');
            });
        });

        Route::prefix('solicitacoes')->group(function () {
            Route::get('/', [SolicitacaoController::class, 'index'])->name('solicitacoesIndex');
            Route::post('/', [SolicitacaoController::class, 'store'])->name('solicitacoesStore');
            Route::put('/{solicitacao}', [SolicitacaoController::class, 'update'])->name('solicitacoesUpdate');
            Route::delete('/{solicitacao}', [SolicitacaoController::class, 'destroy'])->name('solicitacoesDestroy');
        });
    });

    
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
