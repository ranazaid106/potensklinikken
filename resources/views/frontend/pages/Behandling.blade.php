@extends('layouts.app')
@section('yield', 'Behandling')

@section('content')
<!-- css and js Behandling -->
<link rel="stylesheet" href="{{ asset('front_end/Behandling_css/css.css')}}" media="all">
<link href="{{ asset('front_end/Behandling_css/potensklinikken.webflow.b91d711e8.min.css')}}" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/" rel="preconnect">
<link href="https://fonts.gstatic.com/" rel="preconnect" crossorigin="anonymous">
<!-- css and js Behandling -->


<div class="page-wrap">
    {{-- <section class="behandlinger section wf-section"> --}}

            <!-- Shockwave Terapi -->
        
        <header class="section-services-header">
            <div class="page-padding">
                <div class="container-large">
                    <div class="padding-bottom padding-xhuge">
                        <div class="services-header_component">
                            <div class="services-header_image-wrapper">
                                <img src="{{ asset('front_end/Behandling_images/625052210c7ec6171a7427e8_wave%20lines_wix.png')}}" class="services-header_image">
                            </div>
                            <div class="services-header_content">
                                <div class="max-width-medium">
                                    <div class="margin-bottom margin-small">
                                        <h1 class="text-color-white">Shockwave Terapi</h1>
                                    </div>
                                    <div class="margin-bottom margin-large">
                                        <p class="text-color-white">Chokbølge
                                        har vist sig effektiv som et nyt behandlingsmiddel for erektil 
                                        dysfunktion. Terapien giver mulighed for nydannelse af kar i penis og 
                                        hjælper svulmelegemerne med at fyldes med blod således, at det kan 
                                            forbedre rejsningsevnen.</p>
                                    </div>
                                    <a href="#" class="button-4 w-button">Book en tid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    
          <!-- Shockwave Terapi -->
    
         <!-- Årsager til Erektil Dysfunktion -->
                
    
          <section class="section-product-support gradient-background">
            <div class="page-padding">
                <div class="container-large">
                    <div class="padding-top padding-huge">
                        <div class="margin-bottom margin-large">
                            <div class="align-center max-width-large">
                                <h2 class="text-align-center">Årsager til Erektil Dysfunktion</h2>
                            </div>
                            <div class="home-features_content-top padding-top padding-large">
                                <div id="w-node-bdd4d319-bf63-4cb6-b42c-9f259c7940f4-858b9983" class="div-block-4">
                                    <h2 class="heading-10">Årsager til Erektil Dysfunktion</h2>
                                </div>
                                <div id="w-node-_772766e5-35e3-0f85-058e-94bc3f4e38d1-858b9983" class="div-block-3">
                                    <h3 class="text-size-medium margin-bottom-2">
                                        ED kan have mange årsager, men hos 80% er det kardiovaskulært betinget </h3>
                                    <p class="paragraph-5">Årsagen
                                        skal klarlægges for den enkelte patient, men flere faktorer kan spille 
                                        ind og alle har det til fælles at svulmelegemerne ikke fyldes med nok 
                                        blod for at skabe en rejsning. 
                                    </p>
                                </div>
    
                            </div>
                                </div>
                                <div class="product-support_component">
                                    <div class="product-support_full-width-styles w-embed">
    
    
                                                        <!-- <style>
                                            .product-support_component::before {
                                            content: "";
                                            position: absolute;
                                            left: -100vw;
                                            top: 0rem;
                                            right: auto;
                                            bottom: 0rem;
                                            width: 100vw;
                                            z-index: 0;
                                            background-color: hsla(235, 100%, 100%, .68);
                                    }
                                    </style> -->
                              </div>
            <div class="product-support_list">
                <div class="product-support_item">
                    <div class="margin-bottom margin-small">
                        <div class="features-icon-wrapper-2">
                            <div class="feature-icon-round_red">
                                <img src="{{ asset('front_end/Behandling_images/6250609da7c02f0981711c10_Psychiatry.png')}}" loading="lazy" alt="Psykisk betinget ikon" class="icon-1x1-medium-2" width="34">
                            </div>
                        </div>
                    </div>
                    <div class="margin-bottom margin-small">
                        <h3 class="heading-small-2">Psykisk betinget</h3>
                    </div>
                </div>
                <div class="product-support_item">
                    <div class="margin-bottom margin-small">
                        <div class="features-icon-wrapper-2">
                            <div class="feature-icon-round_red">
                                <img src="{{ asset('front_end/Behandling_images/6250609d2135273ebb3fa75c_70494-200.png')}}" loading="lazy" alt="Vaskulært betinget ikon" class="icon-1x1-medium-2" width="33">
                            </div>
                        </div>
                    </div>
                    <div class="margin-bottom margin-small">
                        <h3 class="heading-small-2">Vaskulært</h3>
                    </div>
                </div>
                <div class="product-support_item">
                    <div class="margin-bottom margin-small">
                        <div class="features-icon-wrapper-2">
                            <div class="feature-icon-round_red">
                                <img src="{{ asset('front_end/Behandling_images/6250609d8ad1e13febcf7b2a_2937610-200.png')}}" loading="lazy" alt="Neurogent betinget ikon" class="icon-1x1-medium-2" width="33">
                            </div>
                        </div>
                    </div>
                    <div class="margin-bottom margin-small">
                        <h3 class="heading-small-2">Neurogent</h3>
                    </div>
                </div>
                <div class="product-support_item">
                    <div class="margin-bottom margin-small">
                        <div class="features-icon-wrapper-2">
                            <div class="feature-icon-round_red">
                                <img src="{{ asset('front_end/Behandling_images/6250609dc0aecd66148fc238_2873008.png')}}" loading="lazy" alt="Trauma betinget ikon" class="icon-1x1-medium-2" width="34">
                            </div>
                        </div>
                    </div>
                    <div class="margin-bottom margin-small">
                        <h3 class="heading-small-2">Traume / Kirugi</h3>
                    </div>
                </div>
                <div class="product-support_item">
                    <div class="margin-bottom margin-small">
                        <div class="features-icon-wrapper-2">
                            <div class="feature-icon-round_red">
                                <img src="{{ asset('front_end/Behandling_images/6250609d3ce6eecb2fb1de53_684068-200.png')}}" loading="lazy" alt="Fedme ikon" class="icon-1x1-medium-2" width="33">
                            </div>
                        </div>
                    </div>
                    <div class="margin-bottom margin-small">
                        <h3 class="heading-small-2">Fedme</h3>
                    </div>
                </div>
                <div class="product-support_item">
                    <div class="margin-bottom margin-small">
                        <div class="features-icon-wrapper-2">
                            <div class="feature-icon-round_red">
                                <img src="{{ asset('front_end/Behandling_images/625060b7992acd511f7bc88b_download%20(2)(1).png')}}" loading="lazy" alt="Rygning ikon" class="icon-1x1-medium-2">
                            </div>
                        </div>
                    </div>
                    <div class="margin-bottom margin-small">
                        <h3 class="heading-small-2">Rygning</h3>
                    </div>
                </div>
            </div>
                  </div>
                 </div>
               </div>
                       </div>
         </section>
    
        <!-- Årsager til Erektil Dysfunktion -->
    
    
    <!-- Shockwave starter kroppens egen helingsprocess -->
    <section>
        <div class="page-padding">
            <div class="container-large">
                <div class="padding-vertical padding-huge s">
                    <div class="w-layout-grid grid-image-block_component">
                        <div id="w-node-_73a97fe1-4b8a-3ad0-dc44-960b125ff632-858b9983" class="div-block-8">
                            <div class="margin-bottom-2">
                            <h2 class="heading-medium-2">Shockwave starter kroppens egen helingsprocess</h2>
                        </div>
                        <div class="margin-bottom-3 top">
                            <p class="heading-xsmall-2">
                                Shockwave
                                Terapi er ikke noget nyt. Det er en innovativ behandlingsform mod 
                                impotens, som har bragt stor gavn hos mænd de sidste mange år. 
                                <br>
                            </p>
                        </div>
                    <div class="margin-bottom-3">
                        <p class="paragraph-16 show-mobile-portrait">
                            Lydbølgerne
                            fra shockwave udøver mikrostress, som fremkalder biokemiske ændringer 
                            på vævniveau. Dette aktiverer forskellige processer i kroppen, bl.a. 
                            dannelsen af nye blodkar, blodcirkulationen øges og fibroblastcellerne 
                            danner nyt bindevæv. <br>
                            </p>
    
                    </div>
    
                    <div id="w-node-_3e8c4fb4-eef6-c963-5f59-4492e6f6327b-858b9983" class="div-block">
                        <img src="{{ asset('front_end/Behandling_images/62c4a0fb0563b311c654e2d5_Screenshot%25202022-07-05%2520at%252022-3.png')}}"  class="image-6" width="868">
                    </div>
            <div class="margin-bottom-2">
                <p class="paragraph-15">Shockwaves
                    består af stærke og ekspansive akustiske bølger, som bevæger sig 
                    hurtigere end lydens hastighed, eller mindst 1500 meter i sekundet. <br><br>Lydbølgerne
                    fra Shockwave udøver mikrostress, som fremkalder biokemiske ændringer 
                    på vævniveau. Dette aktiverer forskellige processer i kroppen, bl.a. 
                    dannelsen af nye blodkar, blodcirkulationen øges og fibroblastcellerne 
                    danner nyt bindevæv. <br>
                    </p>
            </div>
            </div>
    
            <div id="w-node-_9e4a6f6e-b067-8b83-be9d-93d27dd62c73-858b9983" class="div-block-6">
                <img class="image-7" src="{{ asset('front_end/Behandling_images/62c4a0fb0563b311c654e2d5_Screenshot%25202022-07-05%2520at%252022-3.png')}}" alt="Shockwave artiere behandling" sizes="100vw" id="w-node-b6bf8a94-fd44-1d0e-fde2-a05c7f63876b-858b9983" width="1112" height="400">
            </div>
        </div>
        </div>
  
    </section>
    
    
    <!-- Shockwave starter kroppens egen helingsprocess -->
    
    
    <!-- Hvordan virker Shockwave på kroppen? -->
    

    <section data-w-id="272763ed-6c50-00a3-414c-c89ca4641779" class="section-home-services-2">
        <div class="page-padding">
            <div class="container-large">
                <div class="padding-vertical padding-large">
                    <div class="home-services_component-2">
                        <div class="div-block-7">
                            <div class="text-block-6">Hvordan virker Shockwave på kroppen?</div>
                        </div>
                        <div>
                            <div data-duration-in="300" data-duration-out="100" data-current="Tab 3" data-easing="ease" class="home-services_tabs w-tabs">
                                <div class="home-services_tabs-menu-2 w-tab-menu" role="tablist">
                                    <a data-w-tab="Tab 1" class="home-services_tabs-link-2 w-inline-block w-tab-link" tabindex="-1" id="w-tabs-0-data-w-tab-0" href="#w-tabs-0-data-w-pane-0" role="tab" aria-controls="w-tabs-0-data-w-pane-0" aria-selected="false">
                                        <div class="text-block-7">Kardannelse</div>
                                    </a>
                                    <a data-w-tab="Tab 2" class="home-services_tabs-link-2 w-inline-block w-tab-link" tabindex="-1" id="w-tabs-0-data-w-tab-1" href="#w-tabs-0-data-w-pane-1" role="tab" aria-controls="w-tabs-0-data-w-pane-1" aria-selected="false">
                                        <div class="text-block-7">Åreforkalkning</div>
                                    </a>
                                    <a data-w-tab="Tab 3" class="home-services_tabs-link-2 w-inline-block w-tab-link w--current" id="w-tabs-0-data-w-tab-2" href="#w-tabs-0-data-w-pane-2" role="tab" aria-controls="w-tabs-0-data-w-pane-2" aria-selected="true">
                                        <div class="text-block-7">NOX</div>
                                    </a>
                                </div>
                                <div class="home-services_tabs-content w-tab-content">
                                        <div data-w-tab="Tab 1" class="home-services_tabs-pane w-tab-pane" id="w-tabs-0-data-w-pane-0" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0">
                                            <div class="home-services_content-wrapper">
                                                <div class="home-services_content-left">
                                                    <div class="margin-bottom margin-medium">
                                                        <h2 class="heading-16">Kardannelse </h2>
                                                    </div>
                                                    <div class="margin-bottom margin-medium">
                                                        <p class="paragraph-17">Med alderen og afhængigt af ens livsstil, kan blodårene i penisområdet forstørknes og formindskes. <br>Her er Shockwave en dokumenteret behandlingsmulighed, som kan starte en angiogeneseprocess. <br>Det
                                                        betyder dannelsen af nye blodkar og bedre blodgennemstrømning i 
                                                        penisområdet, som resulterer i en forbedring af ens rejsning eller 
                                                        genetablering af ens erektion.&nbsp;</p>
                                                    </div>
            <a href="#" class="learn-more-2 w-inline-block">
                <div>See all services</div>
                <div class="learn-more-arrow w-embed">
                    <svg height="100%" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0384 0.218756L24.7817 4.97188C25.0728 5.26355 25.0728 5.73645 24.7817 6.02812L20.0384 10.7812C19.7473 11.0729 19.2754 11.0729 18.9843 10.7812C18.6932 10.4896 18.6932 10.0167 18.9843 9.72499L22.4552 6.24688L0 6.24688L0 4.75312L22.4552 4.75312L18.9843 1.27501C18.6932 0.98333 18.6932 0.510432 18.9843 0.218756C19.2754 -0.0729188 19.7473 -0.0729188 20.0384 0.218756Z" fill="currentcolor"></path>
                    </svg>
                </div>
            </a>
    
        </div>
    
    <div class="home-services_content-right">
        <div class="home-services_image-wrapper">
            <img loading="lazy" src="{{ asset('front_end/Behandling_images/6252d8de964a2b06f67b6fff_men-3.jpg')}}" alt="Kardannelse process" class="home-services_image-2">
            <div data-w-id="272763ed-6c50-00a3-414c-c89ca46417a2" style="opacity: 0; transform: translate3d(-8rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="image-overlay-effect-2">
            </div>
              </div>
            </div>
            </div>
            </div>
             <div data-w-tab="Tab 2" class="home-services_tabs-pane w-tab-pane" id="w-tabs-0-data-w-pane-1" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1">
                <div class="home-services_content-wrapper">
            <div class="home-services_content-left">
                <div class="margin-bottom margin-medium">
                    <h2 class="heading-16">Åreforkalkning</h2>
                </div>
                <div class="margin-bottom margin-small">
                    <p class="paragraph-18">Åreforkalkning,
                også kaldet arteriosklerose, ses som aflejringer af kalk og fedt i 
                blodkarrene, som kan gøre dem hårde og hæmme blodforsyningen, hvilket 
                viser sig som dårlig eller ingen rejsning hos mænd.&nbsp;<br>Shockwave 
                er et godt alternativ til farmakologiske midler mod forkalkning, som 
                virker ved at fjerne forkalkningen i blodårene og forbedre 
                blodforsyningen til penisområdet.&nbsp;</p>
                </div>
                <a href="#" class="learn-more-2 w-inline-block">
                    <div class="text-block-3">See all services</div>
                    <div class="learn-more-arrow w-embed">
                        <svg height="100%" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0384 0.218756L24.7817 4.97188C25.0728 5.26355 25.0728 5.73645 24.7817 6.02812L20.0384 10.7812C19.7473 11.0729 19.2754 11.0729 18.9843 10.7812C18.6932 10.4896 18.6932 10.0167 18.9843 9.72499L22.4552 6.24688L0 6.24688L0 4.75312L22.4552 4.75312L18.9843 1.27501C18.6932 0.98333 18.6932 0.510432 18.9843 0.218756C19.2754 -0.0729188 19.7473 -0.0729188 20.0384 0.218756Z" fill="currentcolor"></path>
                    </svg>
                </div>
                </a>
             </div>
             <div class="home-services_content-right">
                   <div class="home-services_image-wrapper">
            <img loading="lazy" src="{{ asset('front_end/Behandling_images/6252e779593a806cfb8b354f_Screenshot%25202022-04-10%2520at%252016-1.png')}}" alt="Åreforkalkning shockwave " class="home-services_image-2">
            <div class="image-overlay-effect-2">
    
            </div>
        </div>
                </div>
                </div>
                </div>
                <div data-w-tab="Tab 3" class="home-services_tabs-pane w-tab-pane w--tab-active" id="w-tabs-0-data-w-pane-2" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-2">
                    <div class="home-services_content-wrapper">
                        <div class="home-services_content-left">
                            <div class="margin-bottom margin-medium">
                                <h2 class="heading-16">Vasodilation</h2>
                </div>
                <div class="margin-bottom margin-small">
                    <p class="paragraph-19">Når
                        man modtager Shockwave behandling, vil nogle kunne opleve rejsning blot
                        efter få behandlinger. Dette medieres igennem udløsning af Nitric Oxid,
                        som er med til at udvide karrene, også kaldet vasodilation. <br><br>Denne
                        umiddelbare virkning af Shockwave er en lokal effekt. Den endegyldige 
                        effekt, i form af kardannelse og remodulering af væv, er en langsom 
                        process og kan tage flere måneder for at kroppen regenererer sig. <br>
                        </p>
                    </div>
            <a href="#" class="learn-more-2 w-inline-block">
                <div>See all services</div>
                <div class="learn-more-arrow w-embed">
                    <svg height="100%" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0384 0.218756L24.7817 4.97188C25.0728 5.26355 25.0728 5.73645 24.7817 6.02812L20.0384 10.7812C19.7473 11.0729 19.2754 11.0729 18.9843 10.7812C18.6932 10.4896 18.6932 10.0167 18.9843 9.72499L22.4552 6.24688L0 6.24688L0 4.75312L22.4552 4.75312L18.9843 1.27501C18.6932 0.98333 18.6932 0.510432 18.9843 0.218756C19.2754 -0.0729188 19.7473 -0.0729188 20.0384 0.218756Z" fill="currentcolor"></path>
            </svg>
            </div>
                </a>
            </div>
            <div class="home-services_content-right">
                <div class="home-services_image-wrapper">
                    <img  src="{{ asset('front_end/Behandling_images/6252e779e9e26109a3dfb9d0_vasodilation_sexual_health.jpg')}}" loading="lazy" alt="Vasodillation" class="home-services_image-2">
                    <div class="image-overlay-effect-2"></div>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    </section>

    
    <!-- Hvordan virker Shockwave på kroppen? -->
    
    
    <!-- Ikke al shockwave er skabt ens -->
    
    <section  class="section">
        <div class="page-padding">
            <div class="container-large">
                <div class="padding-top padding-medium">
                    <div class="text-align-center">
                        <div class="margin-bottom-3">
                            <h2 class="heading-7">Ikke al shockwave er skabt ens</h2>
                        </div>
                        <div class="margin-bottom-2 center-center">
                            <p class="max-width-large">Shockwave
                                therapy isn’t new. This innovative approach for erectile dysfunction 
                                (ED) has been providing men with long-term relief for over ten years 
                                now. <br><br>Shockwave Terapi er ikke noget nyt. Det er en innovativ 
                                behandlingsform mod erektil dysfunktion, som har bragt stor gavn hos 
                                mænd de sidste mange år. </p>
                        </div>
                    </div>
                    <div class="w-layout-grid grid-image-block_component">
                        <div id="w-node-_2ba32775-dfaa-ebd2-c81d-19685e840776-858b9983">
                            <div class="margin-bottom-2">
                                <h3>Heading</h3>
                            </div>
                            <div class="margin-bottom-2">
                                <p>Vi behandler med en state-of-the-art shockwavemaskine baseret på Piezo Wave teknologi. <br><br>Unfortunately,
                                many providers now offer ED treatments using untested devices with 
                                inadequate energy levels that don’t provide the same results as 
                                shockwave therapy. It’s easy to identify these procedures because they 
                                often have the term “wave” in their name, like:Acoustic wave Acoustic 
                                pressure waveRadial wave<br><br>Unfortunately, possibly the most 
                                widespread FALSE claim is that Acoustic Wave, Acoustic Pressure Wave or 
                                Radial Wave devices are the equivalent to Shockwave devices.</p>
                            </div>
                        </div>
                        <img src="{{ asset('front_end/Behandling_images/placeholder.60f9b1840c.svg')}}" loading="lazy" id="w-node-_1afa66de-977f-613f-e92e-1db1e89772f7-858b9983" alt="" class="image-8" width="218">
                        <div id="w-node-_850a6bc9-fafd-4588-c0c0-28db34ab19d5-858b9983">
                            <img src="{{ asset('front_end/Behandling_images/625346af2bda64a4c0eeb9f2_Piezo-Shockwave-Tech-small.jpg')}}" loading="lazy" class="image-9">
                        </div><div id="w-node-_07ba710d-dc14-8bac-46b7-3984168a4299-858b9983">
                            <div class="margin-bottom-2">
                                <h3>Vores maskine er baseret på Piezo teknologi</h3>
                            </div>
                            <p>ssas</p>
                        </div>
                        <div id="w-node-_4a9b5424-6d20-5367-ffb0-2e49fe2ae536-858b9983">
                            <h3>Focused vs Linear</h3></div><div id="w-node-_5872420d-2eb6-c024-eaeb-cf2191eaa5dd-858b9983">
                                <img src="{{ asset('front_end/Behandling_images/625346af2bda64a4c0eeb9f2_Piezo-Shockwave-Tech-small.jpg')}}" loading="lazy"  alt="Piezo schockwave technolgy" width="911">
                            </div>
                        </div>
                    </div>
                            </div>
                        </div>
    
    
    </section>
    
    
    
    <!-- Ikke al shockwave er skabt ens -->
    
    {{-- </main> --}}
    </div>



@endsection


@section('j_code') 

<script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

<script src="{{ asset('front_endBehandling_js/jquery-3.5.1.min.dc5e7f18c8.js')}}" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="{{ asset('front_endBehandling_js/webflow.7599426de.js')}}" type="text/javascript"></script>


<script type="text/javascript" async="" src="{{ asset('front_end/Behandling_js/js')}}"></script>
<script async="" src="{{ asset('front_end/Behandling_js/gtm.js')}}"></script>
<script src="{{ asset('front_end/Behandling_js/webfont.js')}}" type="text/javascript"></script>



@endsection
