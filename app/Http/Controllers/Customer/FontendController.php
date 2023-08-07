<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FontendController extends Controller
{
    public function index()
    {
        return view('frontend.pages.alt-om-p-shot-til-penisen');
    }

    public function show()
    {
        return view('frontend.pages.alt-om-shockwave-terapi-komplet-guide');
    }

    public function show_Behandlinger()
    {
        return view('frontend.pages.behandlinger');
    }


    public function show_Impotens()
    {
        return view('frontend.pages.Impotens');
    }

    public function show_Infohub()
    {
        return view('frontend.pages.infohub');
    }


    public function show_Optimering()
    {
        return view('frontend.pages.optimering');
    }

    public function show_Penis_filler()
    {
        return view('frontend.pages.Penis-filler');
    }
    
    public function show_vaskulaer_betinget_impotens()
    {
        return view('frontend.pages.vaskulaer-betinget-impotens');
    }
    
    
    public function show_Behandling()
    {
        return view('frontend.pages.behandling');
    }
    
    public function show_Om_Os()
    {
        return view('frontend.pages.Om-Os');
    }

    public function show_Pris()
    {
        return view('frontend.pages.Pris');
    }

    



    


    
}
