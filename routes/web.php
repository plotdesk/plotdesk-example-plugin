<?php

use Illuminate\Support\Facades\Route;
use PlotdeskExamplePlugin\Http\Controllers\AnalyticsController;
use PlotdeskExamplePlugin\Http\Controllers\DashboardController;
use PlotdeskExamplePlugin\Http\Controllers\NoteController;
use PlotdeskExamplePlugin\Http\Controllers\TaskController;

Route::get('/', DashboardController::class)->name('dashboard');
Route::get('/dashboard', DashboardController::class)->name('dashboard.alt');

Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');
Route::post('/tasks', [TaskController::class, 'store'])->name('tasks.store');
Route::put('/tasks/{task}', [TaskController::class, 'update'])->name('tasks.update');
Route::delete('/tasks/{task}', [TaskController::class, 'destroy'])->name('tasks.destroy');

Route::get('/notes', [NoteController::class, 'index'])->name('notes.index');
Route::post('/notes', [NoteController::class, 'store'])->name('notes.store');
Route::put('/notes/{note}', [NoteController::class, 'update'])->name('notes.update');
Route::delete('/notes/{note}', [NoteController::class, 'destroy'])->name('notes.destroy');

Route::get('/analytics', AnalyticsController::class)->name('analytics');
