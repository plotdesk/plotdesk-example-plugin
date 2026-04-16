<?php

use Illuminate\Support\Facades\Route;
use PlotdeskExamplePlugin\Http\Controllers\Api\ApiTaskController;

Route::get('/tasks', [ApiTaskController::class, 'index'])->name('tasks.index');
Route::post('/tasks', [ApiTaskController::class, 'store'])->name('tasks.store');
Route::put('/tasks/{task}', [ApiTaskController::class, 'update'])->name('tasks.update');
Route::delete('/tasks/{task}', [ApiTaskController::class, 'destroy'])->name('tasks.destroy');
