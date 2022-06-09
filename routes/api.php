<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PermissionsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TrackTypeController;
use App\Http\Controllers\TracksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);
Route::get('/logout', [AuthController::class, 'logout']);


Route::middleware('auth:sanctum')->group(function () {

    Route::post('/verify-mobile-number', [AuthController::class, 'verify']);
    Route::post('/profile-page', [AuthController::class, 'profilePage']);
    Route::post('/about-step', [AuthController::class, 'aboutPage']);
    Route::post('/learn', [AuthController::class, 'learn']);
    Route::post('/teach', [AuthController::class, 'teach']);
    Route::post('/resendOTP', [AuthController::class, 'resendOTP']);
    Route::get('/get-user-phone-number', [AuthController::class, 'getUserPhoneNumber']);
    Route::get('/get-profile-details', [AuthController::class, 'getProfileDetails']);
    Route::get('/get-teaching-preferences', [AuthController::class, 'getTeachingPreferences']);
    Route::get('/get-learning-preferences', [AuthController::class, 'getLearningPreferences']);
    Route::post('/edit-Student-PhoneNumber', [AuthController::class, 'editPhoneNumber']);
    Route::post('/edit-Teacher-PhoneNumber', [AuthController::class, 'editPhoneNumber']);

    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index']);
        Route::post('/store', [UserController::class, 'store']);
        Route::get('/show/{id}', [UserController::class, 'show']);
        Route::post('/update', [UserController::class, 'update']);
        Route::get('/delete/{id}', [UserController::class, 'destroy']);
    });

    Route::prefix('roles')->group(function () {
        Route::get('/', [RoleController::class, 'index']);
        Route::post('/store', [RoleController::class, 'store']);
        Route::get('/show/{id}', [RoleController::class, 'show']);
        Route::post('/update', [RoleController::class, 'update']);
        Route::get('/delete/{id}', [RoleController::class, 'destroy']);
    });

    Route::prefix('permissions')->group(function () {
        Route::get('/', [PermissionsController::class, 'index']);
        Route::post('/store', [PermissionsController::class, 'store']);
        Route::get('/show/{id}', [PermissionsController::class, 'show']);
        Route::post('/update', [PermissionsController::class, 'update']);
        Route::get('/delete/{id}', [PermissionsController::class, 'destroy']);
    });

    Route::prefix('category')->group(function () {
        Route::get('/', [CategoryController::class, 'index']);
        Route::post('/store', [CategoryController::class, 'store']);
        Route::get('/show/{id}', [CategoryController::class, 'show']);
        Route::post('/update', [CategoryController::class, 'update']);
        Route::get('/delete/{id}', [CategoryController::class, 'destroy']);
    });

    Route::prefix('tracktypes')->group(function () {
        Route::get('/', [TrackTypeController::class, 'index']);
        Route::post('/store', [TrackTypeController::class, 'store']);
        Route::get('/show/{id}', [TrackTypeController::class, 'show']);
        Route::post('/update', [TrackTypeController::class, 'update']);
        Route::get('/delete/{id}', [TrackTypeController::class, 'destroy']);
    });

    Route::prefix('tracks')->group(function () {
        Route::get('/', [TracksController::class, 'index']);
        Route::post('/store', [TracksController::class, 'store']);
        Route::get('/show/{id}', [TracksController::class, 'show']);
        Route::post('/update', [TracksController::class, 'update']);
        Route::get('/delete/{id}', [TracksController::class, 'destroy']);
    });
});
