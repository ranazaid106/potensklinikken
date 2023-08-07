
@extends('layouts.app')
@section('yield', 'Infohub')

@section('content')


<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,700' rel='stylesheet' type='text/css'>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">



<link href="https://fonts.googleapis.com" rel="preconnect">
<link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>

<script type="text/javascript">WebFont.load({  google: {    families: ["Varela:400","Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic","Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","PT Sans:400,400italic,700,700italic","Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic","Inconsolata:400,700","Varela Round:400"]  }});</script>
<script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>


<link href="{{ asset('front_end/images/favicon.ico')}}" rel="shortcut icon" type="image/x-icon">
<link href="{{ asset('front_end/images/webclip.png')}}" rel="apple-touch-icon">
<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">



<!-- Carousel -->
<link rel="stylesheet" href="{{ asset('front_end/css/owl.carousel.min.css')}}" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css"
/>
<link rel="stylesheet" href="{{ asset('front_end/css/styleCarousel.css')}}" />

   <!-- Carousel -->








<div class="page-wrap" style="overflow: hidden;">
    
  <section class="infohub-hero section wf-section">
    <div class="w-layout-blockcontainer container-80-padding5rem w-container">
      <div class="w-layout-vflex auto-spacing">
        <h1>Infohub</h1>
      </div>
    </div>
  </section>






  <!-- Start Section Picture -->

  <section class="ftco-section mb-5" style="overflow: hidden;">
      <div class="container">
        <div class="row">
          <div class="w-layout-hflex flex-block-3">
            <div class="text-block-97">Seneste blog indlæg</div>
            <div>
              <!-- <button type="button" role="presentation" class="owl-next">
                <img src="images/arrow-white.svg" loading="lazy" width="27" alt="" class="icon-invert-white rotate" />
              </button>
              <button type="button" role="presentation" class="owl-prev">
                <img src="images/arrow-white.svg" loading="lazy" width="27" alt="" class="icon-invert-white no-gap" />
              </button> -->
            </div>
          </div>

          <div class="col-lg-12">
            <div class="featured-carousel owl-carousel">
              <div class="item">
                <div class="work">
                  <div>
              <img src="{{ asset('front_end/images/202166121_292969349223059_4382217926600516908_n.jpg')}}" class="image-104 _1" />
                    <p class="tricks-slider_text text-btn">21 Penis Typer</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="work">
                  <div>
                    <img
                      src="{{ asset('front_end/images/jimmy-chang-ACt8ycSzpdE-unsplash-1.jpg')}}" loading="lazy" class="image-104" />
                    <p class="tricks-slider_text text-btn">Rouge</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="work">
                  <div>
                    <img src="{{ asset('front_end/images/donny-jiang-42gFAgdIUC8-unsplash.jpg')}}" loading="lazy" class="image-104" />
                    <p class="tricks-slider_text text-btn">Jaune</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="work">
                  <div>
                    <img
                      src="{{ asset('front_end/images/anders-jilden-Sc5RKXLBjGg-unsplash.jpg')}}"
                      loading="lazy" class="image-104" />
                    <p class="tricks-slider_text text-btn">Orange</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="work">
                  <div>
                    <img
                      src="{{ asset('front_end/images/norman-brown-FVaimgno3dw-unsplash.jpg')}}" loading="lazy" class="image-104"
                    />
                    <p class="tricks-slider_text text-btn">Vert</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="work">
                  <div>
                    <img
                      src="{{ asset('front_end/images/iltun-huseynli-rfklsTwIYBM-unsplash.jpg')}}" loading="lazy"
                     
                      class="image-104"
                    />
                    <p class="tricks-slider_text text-btn">Violet</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="work">
                  <div>
                    <img
                      src="{{ asset('front_end/images/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg')}}"
                      loading="lazy"
                    
                    />
                    <p class="tricks-slider_text text-btn">Bleu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="progress1">
          <div class="progress_fill" style="width: 0%; height: 0%"></div>
        </div>
      </div>
    </section>

    <!-- End Section Picture -->



  <section  style="background-color: #ebebeb;">
  <div class="container" >
      <div class="row">
          <div class="col-lg-4" style="margin-top: 100px;margin-bottom: 100px;" >
               <img src="{{ asset('front_end/images/22-jacob-bourgery-1831-litho-pl-4-thorax-and-abdomen.jpg')}}" ></div>
          <div class="col-lg-8">
              <div class="border-bottom no-top-pad">
                  <div class="text-3rem" style="padding-top: 92px;">Anatomi</div>
                </div>
                <div class="border-bottom h-flex gap-5rem">
                  <div class="div-block-250">
                    <div class="text-block-99">1.</div>
                  </div>
                  <div class="align-center">
                    <div class="text-block-100">Penis Anatomi &amp; hvor behandlingen udføres</div>
                  </div>
                </div>
                <div class="border-bottom h-flex gap-5rem">
                  <div class="div-block-250">
                    <div class="text-block-99">2.</div>
                  </div>
                  <div class="align-center">
                    <div class="text-block-100">Bækkenbunds Anatomi &amp; hvor behandlingen udføres</div>
                  </div>
                </div>
                <div class="border-bottom h-flex gap-5rem">
                  <div class="div-block-250">
                    <div class="text-block-99">3.</div>
                  </div>
                  <div class="align-center">
                    <div class="text-block-100">Prostata Anatomi &amp; hvor behandlingen udføres</div>
                  </div>
                </div>
                <div class="border-bottom h-flex gap-5rem">
                  <div class="div-block-250">
                    <div class="text-block-99">4.</div>
                  </div>
                  <div class="align-center">
                    <div class="text-block-100">Blærens Anatomi &amp; hvor behandlingen udføres</div>
                  </div>
                </div>

              
          </div>
      </div>
  </div>
</section>





<section>
  <div class="container">
      <div class="row " style="padding-top:70px;padding-left: 20px;">
          <h2 class="heading-36">Erektil dysfunktion &amp; impotens</h2>
      </div>
      <div class="row" style="text-align: center;">
          <div class="col-lg-4" >
              <div class="w-layout-vflex gap-1rem" style="margin-bottom: 4rem;">
                  <img src="{{ asset('front_end/images/646c9af6ee77d8540831b2dd_42.svg')}}" loading="lazy" width="174"  alt="">
                <div>Hvordan fungere en normal rejsning</div>
              </div>
              <div class="w-layout-vflex gap-1rem" style="margin-bottom: 4rem;">
                  <img src="{{ asset('front_end/images/646c9af6ee77d8540831b2dd_42.svg')}}" loading="lazy" width="174" alt="">
                <div>Psykogent rejsningsproblemer</div>
              </div>

          </div>
          <div class="col-lg-4">
              <div id="w-node-_532aa03d-da31-b11a-d9c0-3be561f3f853-24438822" class="div-block-251">
                  <a href="infohub-pages/vaskulaer-betinget-impotens.html" class="link-block-3 w-inline-block">
                    <div class="div-block-228">
                        <img src="{{ asset('front_end/images/B9780702050152000125_f12-02a-9780702050152.jpg')}}" loading="lazy" width="894" alt="" class="image-99">
                    </div>
    
                    <div>
                    <div class="align-center">Vaskulær betinget ED: Den hyppiste form for impotens &amp; hvorfor du nok har det
                    </div>
                    </div>
                    
                  </a>
                </div>
          </div>
          <div class="col-lg-4 "  >
              <div class="w-layout-vflex gap-1rem" style="padding-bottom: 4rem;  margin-left: 3rem;">
                  <img src="{{ asset('front_end/images/646c9af6ee77d8540831b2dd_42.svg')}}" loading="lazy" width="174" alt="">
                <div style="text-wrap: nowrap;">5 alternative behandlinger for impotnes</div>
              </div>
              <div class="w-layout-vflex gap-1rem" style="padding-bottom: 4rem; margin-left: 3rem;">
                  <img src="{{ asset('front_end/images/646c9af6ee77d8540831b2dd_42.svg')}}" loading="lazy" width="174" alt="">
                <div>Top 10 årsager for slap penis</div>
              </div>

          </div>


      </div>

      <div class="row mb-5">
          <div class="col-lg-12" style="text-align: center;">
              <div class="text-block-107">Læs mere</div>
              <img width="26" loading="lazy" src="{{ asset('front_end/images/arrow-white.svg')}}" alt="" class="icon-invert-white no-gap">

          </div>
         
      
      </div>
  </div>
</section>


<section class="featured section linear-bg wf-section">

  <div class="container ">
      <div class="row">
          <div class="col-lg-7 " style="padding-top: 70px;">
         

                  <div class="text-block-105">Featured artikel</div>
                  <div class="div-block-256"></div>
                  <div class="text-block-106">
                      Mirakelmolekylet Nitrogenoxid: Hvorfor du burde kende til det og hvad det kan gøre for dig!
                  </div>
      
                
          </div>
          <div class="col-lg-5" style="padding-top: 70px;padding-bottom: 70px; text-align: right;">

              <img src="{{ asset('front_end/images/4.svg')}}" loading="lazy" width="482" alt="" class="image-106">
          </div>
      </div>
  </div>
</section>


<section  style="overflow: hidden; padding-bottom: 6rem;">
  <div class="container">
      <div class="row">
          <div class="col-lg-12" style="padding-top: 100px;">  
              <h2 class="heading-36">Teknologier vi bruger i klinikken</h2>
          </div>
      </div>
      <div class="row" style="margin-bottom: 60px;">
          <div class="col-lg-4">
              <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="tabs-3 w-tabs">
                  <div class="tabs-menu-4 w-tab-menu">
                    <a id="Shockwave_Terapi" data-w-tab="Tab 1" class="tab-link-tab-1-2 w-inline-block w-tab-link w--current">
                      <div  class="text-1-5rem _500">Shockwave Terapi</div><img width="33" loading="lazy" src="{{ asset('front_end/images/arrow-white.svg')}}" alt="" class="icon-invert-white no-gap">
                    </a>
                    <a id="P_shot"  data-w-tab="Tab 2" class="tab-link-tab-1-2 w-inline-block w-tab-link">
                      <div class="div-block-253">
                        <div  class="text-1-5rem _500">P-shot</div>
                      </div>
                      <div><img width="33" loading="lazy" src="{{ asset('front_end/images/arrow-white.svg')}}" alt="" class="icon-invert-white no-gap"></div>
                    </a>
                    <a id="Pemf"  data-w-tab="Tab 4" class="tab-link-tab-1-2 w-inline-block w-tab-link">
                      <div class="div-block-253">
                        <div class="text-1-5rem _500">Pemf</div>
                      </div>
                      <div><img width="33" loading="lazy" src="{{ asset('front_end/images/arrow-white.svg')}}" alt="" class="icon-invert-white no-gap"></div>
                    </a>
                  </div>
              </div>
          </div>
          <div class="col-lg-8 Shockwave_Terapi">

              <div data-w-tab="Tab 1" class="tab-pane-tab-1 w-tab-pane w--tab-active">
                  <div class="div-block-252">
                    <div  class="w-layout-layout shockwave-grid-columns quick-stack-4 wf-layout-layout">
                      <div id="w-node-_5d016ed8-2b24-d383-bc19-825f2671349f-24438822" class="w-layout-cell cell-5">
                        <div class="w-layout-vflex flex-block-4">
                          <div class="text-block-101">Shockwave VS Potenspiller</div>
                          <div class="div-block-254"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt=""></div>
                        </div>
                      </div>
                      <div id="w-node-_5d016ed8-2b24-d383-bc19-825f267134a0-24438822" class="w-layout-cell cell-7">
                        <div class="w-layout-vflex">
                          <div class="text-block-102">Hvorfor vi bruger en anden type shockwave maskine</div>
                        </div>
                      </div>
                      <div id="w-node-_55f3ef03-92eb-8d5c-7800-fea0951c4f42-24438822" class="w-layout-cell cell-8">
                        <div class="div-block-255">
                          <div class="w-layout-vflex flex-block-5">
                            <div class="text-block-103">Hvor bliver shockwave terapi ellers anvendt</div>
                          </div>
                          <img src="{{ asset('front_end/images/abbeyfields-podcast-cover-artx.jpg')}}" loading="lazy" width="328" sizes="100vw" srcset="{{ asset('front_end/images/abbeyfields-podcast-cover-artx-p-500.jpg')}} 500w, {{ asset('front_end/images/abbeyfields-podcast-cover-artx-p-800.jpg')}} 800w, {{ asset('front_end/images/abbeyfields-podcast-cover-artx-p-1080.jpg')}} 1080w, {{ asset('front_end/images/abbeyfields-podcast-cover-artx.jpg')}} 1400w" alt="" class="image-105">
                        </div>
                      </div>
                      <div id="w-node-d1300821-93f9-67a8-7a6b-7de18f50e954-24438822" class="w-layout-cell cell-6">
                        <div class="w-layout-vflex">
                          <div class="text-block-104">Alt om shockwave teknologien</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
          </div>
          <div class="col-lg-8 P_shot p-5" style="display: none; line-height: 2rem; color: #6f6f6f;">

              Why do we use it?

              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              
          </div>
          <div class="col-lg-8 p-5 Pemf" style="display: none;line-height: 2rem; color: #6f6f6f;">

              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
              
          </div>


      </div>
  </div>
</section>
<style>
@media only screen and (max-width: 995px) {
.media_query{
  display: none;
}
.media_query_small{
  display: block;
}
}
@media only screen and (min-width: 995px) {
  .media_query_small{
  display: none;
}
.media_query{
  display: block;
}
}
  </style>

<section class="media_query_small">
  <div class="container">
      <div class="row mb-5">
          <div class="col-lg-6 p-5" style="background-color: #e4e4e4;">
              <div >
                  <div class="div-block-259">
                    <div class="heading-box">
                      <h1 style="font-size: 40px;font-weight: bold;padding-bottom: 40px;">Penisforstørrelse<br>med Filler</h1>
                      <div>Øjeblikkelig resultat, ingen til minimalt downtime &amp; reversibel. Skal holdes ved lige for at bevare samme tykkelse. </div>
                    </div>
                    <div class="div-block-258">
                      <div class="btn-padder">
                        <a href="#" class="neo-btn-lgt-30br---copy-this w-button">Hvad er HA fillers?</a>
                      </div>
                      <div class="btn-padder">
                        <a href="#" class="neo-btn-lgt-30br---copy-this w-button">Hvilken Filler skal jeg vælge</a>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
         
          <div class="col-lg-6 p-5"  style="background-color: #333;">
              <div >
                  <div class="div-block-260">
                    <div class="heading-box">
                      <h1  style="font-size: 40px;font-weight: bold;padding-bottom: 40px;color: white;">Manuelt<br>Penisforstørrelse</h1>
                      <div class="text-block-108">Tager langtid, ekstremt svært, potentielt skadeligt, og blandet med masser af broscience. Følger man protokollen, kan opnået størrelse være permanent og mere naturlig. </div>
                    </div>
                    <div class="div-block-262">
                      <div class="btn-padder">
                        <a href="#" class="neo-btn-drk-30br---copy-this w-button" style="color:white">Er det overhovedet muligt?</a>
                      </div>
                      <div class="btn-padder">
                        <a href="#" class="neo-btn-drk-30br---copy-this w-button" style="color:white">Er det overhovedet muligt?</a>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
      </div>
  </div>
</section>

  
  <section class="wf-section media_query" >
    <div class="buttons-wrap">
      
      <div class="light-buttons">
        <div class="div-block-259">
          <div class="heading-box">
            <h1 class="heading-37">Penisforstørrelse<br>med Filler</h1>
            <div>Øjeblikkelig resultat, ingen til minimalt downtime &amp; reversibel. Skal holdes ved lige for at bevare samme tykkelse. </div>
          </div>
          <div class="div-block-258">
            <div class="btn-padder">
              <a href="#" class="neo-btn-lgt-30br---copy-this w-button">Hvad er HA fillers?</a>
            </div>
            <div class="btn-padder">
              <a href="#" class="neo-btn-lgt-30br---copy-this w-button">Hvilken Filler skal jeg vælge</a>
            </div>
          </div>
        </div>
      </div>

      <div class="dark-buttons">
        <div class="div-block-260">
          <div class="heading-box">
            <h1 class="heading-37">Manuelt<br>Penisforstørrelse</h1>
            <div class="text-block-108">Tager langtid, ekstremt svært, potentielt skadeligt, og blandet med masser af broscience. Følger man protokollen, kan opnået størrelse være permanent og mere naturlig. </div>
          </div>
          <div class="div-block-262">
            <div class="btn-padder">
              <a href="#" class="neo-btn-drk-30br---copy-this w-button">Er det overhovedet muligt?</a>
            </div>
            <div class="btn-padder">
              <a href="#" class="neo-btn-drk-30br---copy-this w-button">Er det overhovedet muligt?</a>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>

  <section class="hero-section wf-section" style="overflow: hidden;">
    <div class="container-5">
      <div id="w-node-c8e05fdd-7ff5-b640-77f2-8e4f075caa1b-24438822" class="w-layout-layout hero-layout wf-layout-layout">
        <div id="w-node-c8e05fdd-7ff5-b640-77f2-8e4f075caa1c-24438822" class="w-layout-cell">
          <div class="cell-content">
            <div class="w-layout-vflex flex-block-8">
              <h1 class="heading-39">Overblik over potensmedicin</h1>
              <h3 class="heading-38">I Potensklinikken sælger eller videre formidler vi ikke potensmedicin. Mange af vores patienter tag dog brug af medicinering. Vi har derfor sammensat guide omkring de forskellige præparater.</h3>
            </div>
            <h3 class="bottom-heading">Bliv klogere<br>på din medicin</h3><img src="{{ asset('front_end/images/Screenshot-2023-06-24-at-20-42-02-background-textured-real-plain-–-Google-Søgning.png')}}" loading="lazy" sizes="(max-width: 479px) 100vw, 90vw" srcset="{{ asset('front_end/images/Screenshot-2023-06-24-at-20-42-02-background-textured-real-plain-–-Google-Søgning-p-500.png')}} 500w, {{ asset('front_end/images/Screenshot-2023-06-24-at-20-42-02-background-textured-real-plain-–-Google-Søgning.png')}} 626w" alt="" class="background-image">
          </div>
        </div>
        <div id="w-node-c8e05fdd-7ff5-b640-77f2-8e4f075caa28-24438822" class="w-layout-cell">
          <a href="#" class="cell-content link w-inline-block">
            <div class="text-small">Receptpligt</div>
            <div class="w-layout-hflex flex-block-9">
              <h3 class="bottom-heading">Viagra<br>(Sildenafil)</h3>
              <div class="arrow-button w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewbox="0 0 56 56" fill="none" preserveaspectratio="xMidYMid meet" aria-hidden="true" role="img">
                  <circle cx="28" cy="28" r="28" fill="currentColor" fill-opacity="0.14"></circle>
                  <path d="M20 20H36.5M36.5 20V36.5M36.5 20L20 36.5" stroke="currentColor" stroke-opacity="0.6" stroke-width="2"></path>
                </svg></div>
            </div><img src="{{ asset('front_end/images/Viagra.png')}}" loading="lazy" sizes="(max-width: 479px) 100vw, 90vw" srcset="{{ asset('front_end/images/Viagra-p-500.png')}} 500w, {{ asset('front_end/images/Viagra.png')}} 800w" alt="" class="background-image _1">
          </a>
        </div>
        <div id="w-node-c8e05fdd-7ff5-b640-77f2-8e4f075caa33-24438822" class="w-layout-cell">
          <a href="#" class="cell-content link w-inline-block">
            <div class="text-small">Receptpligt</div>
            <div class="w-layout-hflex bottom-content-wrapper">
              <h3 class="bottom-heading">Cialis<br>(tadalafil)</h3>
              <div class="arrow-button w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewbox="0 0 56 56" fill="none" preserveaspectratio="xMidYMid meet" aria-hidden="true" role="img">
                  <circle cx="28" cy="28" r="28" fill="currentColor" fill-opacity="0.14"></circle>
                  <path d="M20 20H36.5M36.5 20V36.5M36.5 20L20 36.5" stroke="currentColor" stroke-opacity="0.6" stroke-width="2"></path>
                </svg></div>
            </div><img src="{{ asset('front_end/images/Cialis-tablet-1.png')}}" loading="lazy" sizes="(max-width: 479px) 100vw, 90vw" srcset="{{ asset('front_end/images/Cialis-tablet-1-p-500.png')}} 500w, {{ asset('front_end/images/Cialis-tablet-1.png')}} 800w" alt="" class="background-image _1">
          </a>
        </div>
        <div id="w-node-c8e05fdd-7ff5-b640-77f2-8e4f075caa3e-24438822" class="w-layout-cell">
          <a href="#" class="cell-content link w-inline-block">
            <div class="text-small">Natur Medicin</div>
            <div class="w-layout-hflex bottom-content-wrapper">
              <h3 class="bottom-heading">Alternativ Potenspiller uden Recept</h3>
              <div class="arrow-button w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewbox="0 0 56 56" fill="none" preserveaspectratio="xMidYMid meet" aria-hidden="true" role="img">
                  <circle cx="28" cy="28" r="28" fill="currentColor" fill-opacity="0.14"></circle>
                  <path d="M20 20H36.5M36.5 20V36.5M36.5 20L20 36.5" stroke="currentColor" stroke-opacity="0.6" stroke-width="2"></path>
                </svg></div>
            </div>
          </a>
        </div>
        <div id="w-node-c8e05fdd-7ff5-b640-77f2-8e4f075caa49-24438822" class="w-layout-cell">
          <div class="cell-content">
            <div class="text-small">Leadership</div>
            <div class="w-layout-hflex bottom-content-wrapper">
              <h3 class="bottom-heading">See the Future</h3>
              <div class="text-small align-right">Learn from the global leaders and shape the future.</div>
            </div><img src="{{ asset('front_end/images/Cell-Background-5_1Cell-Background-5.webp')}}" loading="lazy" sizes="(max-width: 479px) 100vw, 90vw" srcset="{{ asset('front_end/images/Cell-Background-5_1-p-500.jpg')}} 500w, {{ asset('front_end/images/Cell-Background-5_1-p-800.jpg')}} 800w, {{ asset('front_end/images/Cell-Background-5_1-p-1080.jpg')}} 1080w, {{ asset('front_end/images/Cell-Background-5_1-p-1600.jpg')}} 1600w, {{ asset('front_end/images/Cell-Background-5_1-p-2000.jpg')}} 2000w, {{ asset('front_end/images/Cell-Background-5_1-p-2600.jpg')}} 2600w, {{ asset('front_end/images/Cell-Background-5_1-p-3200.jpg')}} 3200w, {{ asset('front_end/images/Cell-Background-5_1Cell-Background-5.webp')}} 3700w" alt="" class="background-image">
          </div>
        </div>
        <div id="w-node-c8e05fdd-7ff5-b640-77f2-8e4f075caa53-24438822" class="w-layout-cell">
          <div class="cell-content">
            <div class="text-small">Workshops</div>
            <div class="w-layout-hflex bottom-content-wrapper">
              <h3 class="bottom-heading">Get<br>Hands-on</h3>
              <div class="text-small align-right">Explore our  workshops led by industry experts.</div>
            </div><img src="{{ asset('front_end/images/Cell-Background-6_1Cell-Background-6.webp')}}" loading="lazy" sizes="(max-width: 479px) 100vw, 90vw" srcset="{{ asset('front_end/images/Cell-Background-6_1-p-500.jpg')}} 500w, {{ asset('front_end/images/Cell-Background-6_1-p-800.jpg')}} 800w, {{ asset('front_end/images/Cell-Background-6_1-p-1080.jpg')}} 1080w, {{ asset('front_end/images/Cell-Background-6_1-p-1600.jpg')}} 1600w, {{ asset('front_end/images/Cell-Background-6_1-p-2000.jpg')}} 2000w, {{ asset('front_end/images/Cell-Background-6_1-p-2600.jpg')}} 2600w, {{ asset('front_end/images/Cell-Background-6_1-p-3200.jpg')}} 3200w, {{ asset('front_end/images/Cell-Background-6_1Cell-Background-6.webp')}} 3700w" alt="" class="background-image">
          </div>
        </div>
        <div id="w-node-c8e05fdd-7ff5-b640-77f2-8e4f075caa5f-24438822" class="w-layout-cell">
          <div class="cell-content">
            <div class="text-small">Afterparty</div>
            <div class="w-layout-hflex bottom-content-wrapper">
              <h3 class="bottom-heading">Celebrate<br>Together</h3>
              <div class="text-small align-right">Join us for a night of celebration at an unforgettable party.</div>
            </div><img src="{{ asset('front_end/images/Cell-Background-7_1Cell-Background-7.webp')}}" loading="lazy" sizes="(max-width: 479px) 100vw, 90vw" srcset="{{ asset('front_end/images/Cell-Background-7_1-p-500.jpg')}} 500w, {{ asset('front_end/images/Cell-Background-7_1-p-800.jpg')}} 800w, {{ asset('front_end/images/Cell-Background-7_1-p-1080.jpg')}} 1080w, {{ asset('front_end/images/Cell-Background-7_1-p-1600.jpg')}} 1600w, {{ asset('front_end/images/Cell-Background-7_1-p-2000.jpg')}} 2000w, {{ asset('front_end/images/Cell-Background-7_1-p-2600.jpg')}} 2600w, {{ asset('front_end/images/Cell-Background-7_1-p-3200.jpg')}} 3200w, {{ asset('front_end/images/Cell-Background-7_1Cell-Background-7.webp')}} 3700w" alt="" class="background-image">
          </div>
        </div>
      </div>
    </div>
  </section>
</div>





@endsection



<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
<script>
let mainCarousel = ".tricks-slider";
let mainSlides = ".tricks-slider_slide";
let parallaxPercentage = 49;
let flkty = new Flickity(mainCarousel, {
contain: true,
freeScroll: true,
percentPosition: true,
pageDots: false,
cellSelector: mainSlides,
cellAlign: "left",
resize: true,
selectedAttraction: 0.01,
dragThreshold: 1,
freeScrollFriction: 0.05
});
flkty.on("scroll", function (progress) {
setImagePositions();
$(".progress_fill").css("width", `${progress * 100}%`);
});
function setImagePositions() {
$(mainSlides).each(function (index) {
  let targetElement = $(this);
  let elementOffset =
    targetElement.offset().left +
    targetElement.width() -
    $(mainCarousel).offset().left;
  let parentWidth = $(mainCarousel).width() + targetElement.width();
  let myProgress = elementOffset / parentWidth;
  let slideProgress = parallaxPercentage * myProgress;
  if (slideProgress > parallaxPercentage) {
    slideProgress = parallaxPercentage;
  } else if (slideProgress < 0) {
    slideProgress = 0;
  }
  targetElement
    .find(".image")
    .css("transform", `translateX(-${slideProgress}%)`);
});
}
setImagePositions();
</script>



<script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
<script>
            
    $(document).ready(function(){
$("#Shockwave_Terapi").click(function(){
$(".Pemf").hide();
$(".P_shot").hide();
 $(".Shockwave_Terapi").show();


});
});

$(document).ready(function(){
$("#P_shot").click(function(){
  $(".P_shot").show();
$(".Shockwave_Terapi").hide();
 $(".Pemf").hide();



});
});

 $(document).ready(function(){
$("#Pemf").click(function(){

$(".Shockwave_Terapi").hide();
$(".Pemf").show();
 $(".P_shot").hide();



});
});


    </script>

    <!-- owl.carousel -->
<script src="{{ asset('front_end/js/owl.carousel.min.js')}}"></script>
<script src="{{ asset('front_end/js/mainCarousel.js')}}"></script>

<!-- owl.carousel -->
