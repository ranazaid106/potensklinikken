<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PouseController;
use App\Http\Controllers\GoogleCalendarController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\Customer\FontendController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/home', function () {
    return view('home');
});



// Route::get('/', function () {

//     // Route::get('/google-calendar-common','getCommonTimeSlots');
// });



Route::controller(GoogleCalendarController::class)->group(function () {

    Route::get('/','getCommonTimeSlots');
    Route::get('/UpdateTimeSet','test');
    Route::get('/UpdateTimeSet-pouse','pouse');
    
    });




 

    // Route::controller(PouseController::class)->group(function () {

    //     Route::get('/google-pouse','pouseinsert');
    //     Route::get('/execute-round','executeRound');
        
    //     });

        

Route::controller(FontendController::class)->group(function () {
    Route::get('Alt-om-p-shot-til-penisen/','index');
    Route::get('Alt-om-shockwave-terapi-komplet-guide/','show');
    Route::get('Behandlinger/','show_Behandlinger');
    Route::get('Impotens/','show_Impotens');
    Route::get('Infohub/','show_Infohub');
    Route::get('Optimering/','show_Optimering');
    Route::get('Penis-filler/','show_Penis_filler');
    Route::get('vaskulaer-betinget-impotens/','show_vaskulaer_betinget_impotens');
    Route::get('Behandling/','show_Behandling');
    Route::get('Om-Os/','show_Om_Os');
    Route::get('Pris/','show_Pris');
  
    
    
    });


Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::prefix('admin')->middleware(['auth','isAdmin'])->group(function(){


// Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');



});







