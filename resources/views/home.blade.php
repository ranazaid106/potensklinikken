@extends('layouts.app')
@section('yield', 'Home')

@section('content')




<section class="hero section _2 wf-section">
  <div class="container-80-padding5rem w-container">
    <div class="content-block-flex gap-7">
      <h1 class="h1-hero _1">Vi fixer rejsninger<span>.</span></h1>
      <div class="w-embed">
        <style>
          html {
            font-size: 1rem;
          }
          @media screen and (max-width: 1920px) {
            html {
              font-size: 1rem;
            }
          }
          @media screen and (max-width: 1440px) {
            html {
              font-size: calc(
                0.1982182628062361rem + 0.8908685968819599vw
              );
            }
          }
          @media screen and (max-width: 991px) {
            html {
              font-size: calc(
                0.44698660714285715rem + 0.8928571428571428vw
              );
            }
          }
          @media screen and (max-width: 767px) {
            html {
              font-size: calc(
                0.3342013888888889rem + 1.3888888888888888vw
              );
            }
          }
          @media screen and (max-width: 479px) {
            html {
              font-size: calc(
                0.36640211640211645rem + 2.1164021164021163vw
              );
            }
          }
          @media screen and (max-width: 290px) {
            html {
              font-size: 0.75rem;
            }
          }
        </style>
      </div>
      <h2 class="h2-hero">
        En klinik for mandens <br />sexuelle sundhed og velvære<span
          >.</span
        >
      </h2>
    </div>
    <div class="spacer-6rem">
      <div class="content-block-flex gap-2rem start" id="flex-ki-direction-column">
        <div class="image-wrap__70px">
          <img
            src="{{ asset('front_end/images/62b48556143adeade90a9104_2022s0621_191707-p-500.jpg')}}"
            loading="lazy"
            alt="Behandler sygeplejerske"
            class="image-laura"
          />
        </div>
        <div class="div-block-226">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="w-dyn-item">
                <div class="div-block-249 justify-content-between ">
                  <div>
                    <div class="weight400" style="display: inline;">
                      Næste ledig tid er <strong>om </strong>
                    </div>
                    <div class="weight400 time" style="display: inline;">17:30</div>
                    <div class="weight400" style="display: inline;">
                      <strong>timer</strong> med<strong></strong>
                    </div>
                    <div class="weight400 name" style="display: inline;">Laura</div>
                  </div>
                  <div id="book-tid-size-change">

                  <a href="#" class="button-main _1 w-button" >Book Tid</a>

                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="w-dyn-empty">
              <div>No items found.</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<!-- Bedere.Stærkere.Fyldigere. Se vores behandling -->

<section class="subhero section wf-section">
  <div
    class="container-80-padding8rem padding6rem-bottom mobile w-container"
  >
    <div class="hero__columns">
      <div class="hero__col col--1">
        <div class="wrapper-28rem">
          <div class="textblock-h1-3rem">
            Bedere<span class="dot-2">.</span> <span class="dot"></span
            ><br />
          </div>
          <div class="textblock-h1-3rem">
            Stærkere<span class="dot-2">.</span><span class="dot"></span
            ><br />
          </div>
          <div class="textblock-h1-3rem">
            Fyldigere<span class="dot-2">.</span> <span class="dot"></span
            ><br />
          </div>
          <div class="button-flere_behandlinger">
            <div class="skills__list-title stroke--06">
              Se vores behandlinger
            </div>
            <div class="btn-submit mod--hero stroke--btn-1">
              <img
                src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                loading="lazy"
                width="49"
                alt=""
                class="icon-invert-white _1"
              />
            </div>
          </div>
        </div>
        <div class="new-tab-swipper">
          <div
            data-delay="4000"
            data-animation="slide"
            class="carousel is_contained w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="true"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="false"
            id="carousel"
          >
            <div class="carousel-mask w-slider-mask">
              <div class="carousel-slider w-slide">
                <div
                  data-person="card"
                  data-w-id="48b337d0-2c7d-94e1-43dd-0d86c7124e20"
                  class="hero__person mod--1"
                >
                  <a
                    href="behandlinger-2/impotens.html"
                    class="hero__person-cont w-inline-block"
                    ><img
                      src="{{ asset('front_end/images/unavngiveta.jpg')}}"
                      loading="eager"
                      sizes="(max-width: 479px) 75vw, (max-width: 767px) 50vw, 100vw"
                      data-w-id="48b337d0-2c7d-94e1-43dd-0d86c7124e22"
                      srcset="
                        {{ asset('front_end/images/unavngiveta-p-500.jpg')}}  500w,
                        {{ asset('front_end/images/unavngiveta-p-800.jpg')}}  800w,
                        {{ asset('front_end/images/unavngiveta.jpg')}}       1080w
                      "
                      alt=""
                      class="hero__person-img mod--1"
                    />
                    <div class="hero__person-grad">
                      <div
                        data-person="txt-less"
                        data-w-id="48b337d0-2c7d-94e1-43dd-0d86c7124e24"
                        class="hero__person-txt-less mod--1"
                      >
                        <div class="hero__person-title">
                          Cooking<br />
                        </div>
                        <div class="hero__person-square"></div>
                      </div>
                      <div
                        data-person="txt-more"
                        class="hero__person-txt-more mod--2 _1"
                      >
                        <div data-person="title" class="text-block-16">
                          Impotens &amp;<br />Erektil Dysfunktion
                        </div>
                        <div
                          data-person="count"
                          class="hero__person-count"
                        >
                          <span
                            class="hero__person-count-title stroke--white-02"
                            >100</span
                          ><br /><span class="hero__person-count-span"
                            >TOPICS</span
                          >
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="carousel-slider _2 w-slide">
                <div
                  data-person="card"
                  data-w-id="d98a8c04-61e7-1b73-4d3e-49044538a9bc"
                  class="hero__person mod--2"
                >
                  <a
                    href="behandlinger-2/optimering.html"
                    class="hero__person-cont w-inline-block"
                    ><img
                      src="{{ asset('front_end/images/The-Priapus-shot3.jpg')}}"
                      loading="eager"
                      sizes="(max-width: 479px) 75vw, (max-width: 767px) 50vw, 100vw"
                      data-w-id="d98a8c04-61e7-1b73-4d3e-49044538a9be"
                      srcset="
                        {{ asset('front_end/images/The-Priapus-shot3-p-500.jpg')}} 500w,
                        {{ asset('front_end/images/The-Priapus-shot3-p-800.jpg')}} 800w,
                        {{ asset('front_end/images/The-Priapus-shot3.jpg')}}       825w
                      "
                      alt=""
                      class="hero__person-img mod--2"
                    />
                    <div class="hero__person-grad">
                      <div
                        data-person="txt-less"
                        class="hero__person-txt-less mod--2"
                      >
                        <div class="hero__person-title stroke--white-02">
                          Writing
                        </div>
                        <div class="hero__person-square"></div>
                      </div>
                      <div
                        data-person="txt-more"
                        class="hero__person-txt-more mod--2 _1"
                      >
                        <div data-person="title" class="text-block-16">
                          Boost &amp;<br />Optimér rejsningen
                        </div>
                        <div
                          data-person="count"
                          class="hero__person-count"
                        >
                          <span
                            class="hero__person-count-title stroke--white-02"
                            >100</span
                          ><br /><span class="hero__person-count-span"
                            >TOPICS</span
                          >
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="carousel-slider _3 w-slide">
                <div
                  data-person="card"
                  data-w-id="cd2f6ce7-21e2-5c43-10fb-21ea7f617f44"
                  class="hero__person mod--3"
                >
                  <a
                    href="behandlinger-2/penis-filler.html"
                    class="hero__person-cont w-inline-block"
                    ><img
                      src="{{ asset('front_end/images/cropped-RS_Non-surgical-penis-enlargement_.jpg')}}"
                      loading="eager"
                      sizes="100vw"
                      data-w-id="cd2f6ce7-21e2-5c43-10fb-21ea7f617f46"
                      srcset="
                        {{ asset('front_end/images/cropped-RS_Non-surgical-penis-enlargement_-p-500.jpg')}}   500w,
                        {{ asset('front_end/images/cropped-RS_Non-surgical-penis-enlargement_-p-800.jpg')}}   800w,
                        {{ asset('front_end/images/cropped-RS_Non-surgical-penis-enlargement_-p-1080.jpg')}} 1080w,
                        {{ asset('front_end/images/cropped-RS_Non-surgical-penis-enlargement_-p-1600.jpg')}} 1600w,
                        {{ asset('front_end/images/cropped-RS_Non-surgical-penis-enlargement_.jpg')}}        2000w
                      "
                      alt=""
                      class="hero__person-img mod--3"
                    />
                    <div class="hero__person-grad">
                      <div
                        data-person="txt-less"
                        class="hero__person-txt-less mod--3"
                      >
                        <div class="hero__person-title stroke--white-02">
                          Business<br />
                        </div>
                        <div class="hero__person-square"></div>
                      </div>
                      <div
                        data-person="txt-more"
                        class="hero__person-txt-more mod--3 _1"
                      >
                        <div data-person="title" class="text-block-16">
                          Penis forstørrelse<br />med filler
                        </div>
                        <div
                          data-person="count"
                          class="hero__person-count"
                        >
                          <span
                            class="hero__person-count-title stroke--white-02"
                            >100</span
                          ><br /><span class="hero__person-count-span"
                            >TOPICS</span
                          >
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="arrow-left w-slider-arrow-left">
              <div class="icon-10 w-icon-slider-left"></div>
            </div>
            <div class="arrow-right w-slider-arrow-right">
              <div class="icon-9 w-icon-slider-right"></div>
            </div>
            <div class="w-slider-nav w-round"></div>
          </div>
          <div>
            <div>Swipe for at se vores behandlinger</div>
          </div>
        </div>
        <div class="form-block mod--hero w-form">
          <form
            id="wf-form-Find"
            name="wf-form-Find"
            data-name="Find"
            method="get"
            class="form"
            data-wf-page-id="6495c3eb756614ec2443881a"
            data-wf-element-id="a2d3af2f-5434-d1b9-3bc9-78cdf56eafcf"
          >
            <input
              type="text"
              class="input mod--hero w-input"
              maxlength="256"
              name="Find-2"
              data-name="Find 2"
              placeholder="Find your passion"
              id="Find-2"
              required=""
            />
            <a
              href="#"
              class="btn-submit mod--hero stroke--btn-1 w-button"
              >Go</a
            >
          </form>
          <div class="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="w-form-fail">
            <div>
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
      </div>
      <div class="hero__col col--2 position-relative" style="width: 740px">
        <div
          data-person="main"
          data-w-id="a2d3af2f-5434-d1b9-3bc9-78cdf56eafda"
          class="hero__persons test"
        >
          <div
            data-person="card"
            data-w-id="a2d3af2f-5434-d1b9-3bc9-78cdf56eafdb"
            class="hero__person mod--1"
          >
            <a
              href="behandlinger-2/impotens.html"
              class="hero__person-cont w-inline-block"
              ><img
                src="{{ asset('front_end/images/unavngiveta.jpg')}}"
                loading="eager"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 98.9124984741211px, 11vw"
                data-w-id="a2d3af2f-5434-d1b9-3bc9-78cdf56eafdd"
                srcset="
                  {{ asset('front_end/images/unavngiveta-p-500.jpg')}}  500w,
                  {{ asset('front_end/images/unavngiveta-p-800.jpg')}}  800w,
                  {{ asset('front_end/images/unavngiveta.jpg')}}       1080w
                "
                alt=""
                class="hero__person-img mod--1"
              />
              <div class="hero__person-grad">
                <div
                  data-person="txt-less"
                  data-w-id="a2d3af2f-5434-d1b9-3bc9-78cdf56eafdf"
                  class="hero__person-txt-less mod--1"
                >
                  <div class="hero__person-title">Impotens<br /></div>
                  <div class="hero__person-square"></div>
                </div>
                <div
                  data-person="txt-more"
                  data-w-id="a2d3af2f-5434-d1b9-3bc9-78cdf56eafe4"
                  class="hero__person-txt-more mod--1"
                >
                  <div
                    data-person="title"
                    class="hero__person-title-2 stroke--white-02"
                  >
                    Impotens &amp;<br />Erektil Dysfunktion
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div
            data-person="card"
            data-w-id="a2d3af2f-5434-d1b9-3bc9-78cdf56eafe9"
            class="hero__person mod--2"
          >
            <a
              href="behandlinger-2/optimering.html"
              class="hero__person-cont w-inline-block"
              ><img
                src="{{ asset('front_end/images/The-Priapus-shot3.jpg')}}"
                loading="eager"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 98.9124984741211px, 11vw"
                data-w-id="a2d3af2f-5434-d1b9-3bc9-78cdf56eafeb"
                srcset="
                  {{ asset('front_end/images/The-Priapus-shot3-p-500.jpg')}} 500w,
                  {{ asset('front_end/images/The-Priapus-shot3-p-800.jpg')}} 800w,
                  {{ asset('front_end/images/The-Priapus-shot3.jpg')}}       825w
                "
                alt=""
                class="hero__person-img mod--2"
              />
              <div class="hero__person-grad">
                <div
                  data-person="txt-less"
                  class="hero__person-txt-less mod--2"
                >
                  <div class="hero__person-title stroke--white-02">
                    Optimering
                  </div>
                  <div class="hero__person-square"></div>
                </div>
                <div
                  data-person="txt-more"
                  data-w-id="a2d3af2f-5434-d1b9-3bc9-78cdf56eaff1"
                  class="hero__person-txt-more mod--2"
                >
                  <div
                    data-person="title"
                    class="hero__person-title-3 stroke--white-02"
                  >
                    Boost &amp; <br />Optimér rejsningen
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div
            data-person="card"
            data-w-id="a2d3af2f-5434-d1b9-3bc9-78cdf56eaff6"
            class="hero__person mod--3"
          >
            <div class="hero__person-cont">
              <img
                src="{{ asset('front_end/images/cropped-RS_Non-surgical-penis-enlargement_.jpg')}}"
                loading="eager"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 98.9124984741211px, 11vw"
                data-w-id="a2d3af2f-5434-d1b9-3bc9-78cdf56eaff8"
                srcset="
                  {{ asset('front_end/images/cropped-RS_Non-surgical-penis-enlargement_-p-500.jpg')}}   500w,
                  {{ asset('front_end/images/cropped-RS_Non-surgical-penis-enlargement_-p-800.jpg')}}   800w,
                  {{ asset('front_end/images/cropped-RS_Non-surgical-penis-enlargement_-p-1080.jpg')}} 1080w,
                  {{ asset('front_end/images/cropped-RS_Non-surgical-penis-enlargement_-p-1600.jpg')}} 1600w,
                  {{ asset('front_end/images/cropped-RS_Non-surgical-penis-enlargement_.jpg')}}        2000w
                "
                alt=""
                class="hero__person-img mod--3"
              />
              <a
                href="behandlinger-2/penis-filler.html"
                class="hero__person-grad w-inline-block"
              >
                <div
                  data-person="txt-less"
                  class="hero__person-txt-less mod--3"
                >
                  <div class="hero__person-title stroke--white-02">
                    Penis Filler<br />
                  </div>
                  <div class="hero__person-square"></div>
                </div>
                <div
                  data-person="txt-more"
                  data-w-id="a2d3af2f-5434-d1b9-3bc9-78cdf56eafff"
                  class="hero__person-txt-more mod--3"
                >
                  <div
                    data-person="title"
                    class="hero__person-title stroke--white-02"
                  >
                    Penis forstørrelse<br />med filler
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            id="heroColumnsSliding"
            onmouseenter="moving_div_hero()"
            onmouseout="moving_div_out()"
            class="hero__columns__div position-absolute right-0"
          >
            <span
              id="heroColumnIcons"
              onmouseenter="moving_div_hero()"
              onmouseout="moving_div_out()"
              ><i class="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Bedere.Stærkere.Fyldigere. Se vores behandling -->

<section class="intro section wf-section">
  <div class="container-80-padding5rem-new w-container">
    <div class="intro_top-wrapper">
      <h2>Velkommen til Potensklinikken<span class="dot-2">.</span></h2>
      <div class="intro_wrapper-43-7rem">
        <p class="p-intro">
          Vi er en klinik, der dedikerer os til at imødekomme mandens
          behov og skabe en positiv forandring i deres liv. Hos os er
          vores sjæl og formål at tilbyde innovative og effektive
          behandlinger, der kan hjælpe mænd med at genopdage deres
          selvtillid, vitalitet og seksuelle velvære.
        </p>
        <div class="skills__achieve mod--desctop">
          <div class="skills__achieve-txt-wrap">
            <div class="skills__achieve-title stroke--08">50%</div>
            <div class="skills__achieve-desc stroke--06">
              bliver ramt af SLAPHED på et tidspunkt I DERES LIV.
            </div>
          </div>
          <div class="skills__achieve-line"></div>
          <div class="skills__achieve-txt-wrap">
            <div class="skills__achieve-title stroke--08">
              9 ud <br />af 10
            </div>
            <div class="skills__achieve-desc stroke--06">
              oplever forbedring med Shockwave terapi
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="skills__columns">
      <div class="skills__col tablet-hide">
        <ul role="list" class="skills__list">
          <li class="skills__list-item">
            <div class="skills__list-ico">
              <img
                src="https://uploads-ssl.webflow.com/6453adc29a84594cfcb04642/6453adc29a84593521b04662_ico_skills-leadership.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div class="div-block-42">
              <div class="skills__list-title stroke--06">
                Smertefri<br />behandling
              </div>
            </div>
            <div class="skills__list-line"></div>
          </li>
          <li class="skills__list-item">
            <div class="skills__list-ico">
              <div class="skills__list-line"></div>
              <img
                src="https://uploads-ssl.webflow.com/6453adc29a84594cfcb04642/6453adc29a8459ecc4b04664_ico_skills-responsibility.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div class="div-block-42">
              <div class="skills__list-title stroke--06">
                Ingen<br />bivirkning
              </div>
            </div>
          </li>
          <li class="skills__list-item">
            <div class="skills__list-ico">
              <img
                src="https://uploads-ssl.webflow.com/6453adc29a84594cfcb04642/6453adc29a845966a8b04667_ico_skills-flexibility.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div class="div-block-42">
              <div class="skills__list-title stroke--06">
                Dokumenteret<br />effekt
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="skills__col mod--video">
        <div data-achieve="mob" class="skills__achieve mob--mob">
          <div class="skills__achieve-txt-wrap active done">
            <div class="skills__achieve-title stroke--08">50%</div>
            <div class="skills__achieve-desc stroke--02">
              bliver ramt af SLAPHED på et tidspunkt I DERES LIV.
            </div>
          </div>
          <div class="skills__achieve-txt-wrap active hide">
            <div class="skills__achieve-title stroke--08">
              9 ud<br />af 10
            </div>
            <div class="skills__achieve-desc stroke--02">
              oplever forbedring med Shockwave terapi
            </div>
          </div>
        </div>
        <div class="skills__video-wrap">
          <a href="#" class="lightbox-link w-inline-block w-lightbox"
            ><img
              src="{{ asset('front_end/images/vlcsnap-2021-07-03-17h03m35s971.png')}}"
              loading="lazy"
              width="1141"
              class="image-25 _1"
            />
            <script type="application/json" class="w-json">
              {
                "items": [],
                "group": ""
              }
            </script>
          </a>
          <div class="skills__video w-embed w-iframe">
            <iframe
              id="vimeo-player"
              class="skills__video"
              src="https://player.vimeo.com/video/641585003?h=a359e6a27b&background=1&autoplay=1&loop=1&byline=0&title=0&quality=480p"
              frameborder="0"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowfullscreen=""
            ></iframe>
          </div>
          <div class="skills__video-nav">
            <img
              src="https://uploads-ssl.webflow.com/6453adc29a84594cfcb04642/6453adc29a8459b8fcb04690_ico_pause.svg"
              loading="lazy"
              id="pause"
              alt=""
              class="skills__video-nav-ico active"
            />
            <img
              src="https://uploads-ssl.webflow.com/6453adc29a84594cfcb04642/6453adc29a8459d73bb0467b_ico_play.svg"
              loading="lazy"
              id="play"
              alt=""
              class="skills__video-nav-ico"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<section class="section-6 wf-section" >
  <div class="w-layout-blockcontainer container-80-padding5rem w-container">
    <div id="w-node-_0b083ba3-48db-9a0b-1b31-44d22af6873b-2443881a" class="w-layout-layout quick-stack wf-layout-layout">
      <div id="w-node-_0b083ba3-48db-9a0b-1b31-44d22af6873c-2443881a" class="w-layout-cell">
        <div class="div-block-239">
          <div class="div-block-238">
            <h3 class="h3-2-5rem margin-bottom-3rem">Læs vores udvalgte artikler<span class="dot-2"></span><span class="dot-green-2"></span></h3>
            <p>I&nbsp;vores infohub har vi dokumenteret og samlet alt indenfor potens og virilitet. Tjek det ud hvis du vil nørde mere om mandens sexualitet. </p>
            <a href="infohub.html" class="w-inline-block">
              <div class="div-block-246">
                <img src="{{ asset('front_end/images/search-icon.png')}}" loading="lazy" width="21" alt="" class="icon-invert-white no-gap _1rem">
                <div class="text-block-96">Udforsk Infohub</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="w-node-_0b083ba3-48db-9a0b-1b31-44d22af6873d-2443881a" class="w-layout-cell">
        <div class="div-block-243">
          <a href="infohub-pages/vaskulaer-betinget-impotens.html" class="link-block-4 w-inline-block">
            <div class="wrapper" style="will-change: width, height; height: 70px;">
              <div class="moving-color" style="will-change: background; background-color: rgb(172, 172, 172);"></div>
              <div data-w-id="0b083ba3-48db-9a0b-1b31-44d22af68741" class="div-block-3">
                <div class="div-block-4">
                  <div>
                    <div class="text-block-95">Vaskulær<br>impotens</div>
                  </div>
                  <div><img src="{{ asset('front_end/images/02.jpg')}}" loading="lazy" sizes="112px" srcset="{{ asset('front_end/images/02-p-500.jpg')}} 500w, {{ asset('front_end/images/02.jpg')}} 800w" alt="" class="image"></div>
                </div>
                <div class="div-block-241">
                  <p class="movingp" style="will-change: opacity, transform; opacity: 0; transform: translate3d(0px, 84px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">80% af alt impotens er vaskulær betinget</p>
                </div>
              </div>
            </div>
          </a>
          <div class="wrapper" style="will-change: width, height; height: 70px;">
            <div class="moving-color" style="will-change: background; background-color: rgb(172, 172, 172);"></div>
            <div data-w-id="0b083ba3-48db-9a0b-1b31-44d22af6874d" class="div-block-3">
              <div class="div-block-4">
                <div>
                  <div class="text-block-95">Viagra<br>vs shockwave</div>
                </div>
                <div><img src="{{ asset('front_end/images/telework-6795505_1280.jpg')}}" loading="lazy" sizes="(max-width: 479px) 44vw, 105.0374984741211px" srcset="{{ asset('front_end/images/telework-6795505_1280-p-500.jpg')}} 500w, {{ asset('front_end/images/telework-6795505_1280-p-800.jpg')}} ')}}00w, {{ asset('front_end/images/telework-6795505_1280-p-1080.jpg')}} 1080w, {{ asset('front_end/images/telework-6795505_1280.jpg')}} 1280w" alt="" class="image"></div>
              </div>
              <div class="div-block-241">
                <p class="movingp" style="will-change: opacity, transform; opacity: 0; transform: translate3d(0px, 84px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">Hvorfor vi mener at shockwave terapi er bedre end potenspiller</p>
              </div>
            </div>
          </div>
          <div class="wrapper" style="will-change: width, height; height: 70px;">
            <div class="moving-color" style="will-change: background; background-color: rgb(172, 172, 172);"></div>
            <div data-w-id="0b083ba3-48db-9a0b-1b31-44d22af68759" class="div-block-3">
              <div class="div-block-4">
                <div>
                  <div class="text-block-95">Shockwave <br>terapi</div>
                </div>
                <div><img src="{{ asset('front_end/images/PiezoWave2-Front-Lefts.png')}}" loading="lazy" sizes="99.7125015258789px" srcset="{{ asset('front_end/images/PiezoWave2-Front-Lefts-p-500.png')}} 500w, {{ asset('front_end/images/PiezoWave2-Front-Lefts-p-800.png')}} 800w, {{ asset('front_end/images/PiezoWave2-Front-Lefts.png')}} 1000w" alt="" class="image"></div>
              </div>
              <div class="div-block-241">
                <p class="movingp" style="will-change: opacity, transform; opacity: 0; transform: translate3d(0px, 84px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">Bliv klogere på hvad behandlingen er og hvordan det kan gavne dig</p>
              </div>
            </div>
          </div>
          <div class="wrapper" style="will-change: width, height; height: 70px;">
            <div class="moving-color" style="will-change: background; background-color: rgb(172, 172, 172);"></div>
            <div data-w-id="0681b767-e82e-12f9-b1ee-4a4d58782235" class="div-block-3">
              <div class="div-block-4">
                <div>
                  <div class="text-block-95">Shockwave <br>terapi</div>
                </div>
                <div><img src="{{ asset('front_end/images/PiezoWave2-Front-Lefts.png')}}" loading="lazy" sizes="99.7125015258789px" srcset="{{ asset('front_end/images/PiezoWave2-Front-Lefts-p-500.png')}} 500w, {{ asset('front_end/images/PiezoWave2-Front-Lefts-p-800.png')}} 800w, {{ asset('front_end/images/PiezoWave2-Front-Lefts.png 1000w')}}" alt="" class="image"></div>
              </div>
              <div class="div-block-241">
                <p class="movingp" style="will-change: opacity, transform; opacity: 0; transform: translate3d(0px, 84px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">Bliv klogere på hvad behandlingen er og hvordan det kan gavne dig</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<section class="section-home-cta-2">
  <div class="div-block-242">
    <h2 class="heading-35 a">
      Hvad gør <br />os unikke<span class="dot-green-6">.</span>
    </h2>
  </div>
  <div class="container-large is-90">
    <div class="padding-vertical padding-huge is-bottom-0">
      <div class="home-cta_component-2">
        <div class="home-cta_content-left-4">
          <img
            src="{{ asset('front_end/images/vlcsnap-2021-07-03-17h05m50s903-1.png')}}"
            loading="lazy"
            class="home-cta_image-2"
          />
        </div>
        <div class="home-cta_content-right-2">
          <div class="div-block-69">
            <p class="text-size-medium text-weight-bold">
              Hos Potensklinikken finder du koncentreret ekspertise
              omkring rejsningsproblemer og optimering af din erektion med
              en hel unik behandlingspakke, der bl.a. består af Shockwave
              og P-shot.
            </p>
          </div>
          <a href="#" class="button-3 is-inverted-color w-button"
            >Mød vores behandler</a
          >
        </div>
      </div>
    </div>
  </div>
</section>




<section class="info-blog section wf-section">
  <div
    data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad1b4"
    style="opacity: 0"
    class="content container-80-padding5rem"
  >
    <h3 class="h3-2-5rem heading--center gap-3rem">
      Til dig der vil nørde mere<span class="dot-2">.</span
      ><span class="dot-green-2"></span>
    </h3>
    <p class="align-center_45rem gap-3-5rem">
      Det er et lille udpluk. Hvis du vil læse mere så kig i vores
      Infohub. Der har vi dokumenteret og samlet alt info indenfor
      området.
    </p>
    <div
      data-tabs="category"
      data-current="Tab 1"
      data-easing="ease"
      data-duration-in="300"
      data-duration-out="100"
      class="category__tabs w-tabs"
    >
      <div class="category__tabs-mask w-tab-content">
        <div
          data-w-tab="Tab 1"
          class="category__tab w-tab-pane w--tab-active"
        >
          <div
            data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad1cf"
            class="category__columns"
          >
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad1d0"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_2categories_01.webp')}}"
                  alt=""
                  class="category__cad-img mod--desctop"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Eneste klinik i Danmark som tilbyder P-shot
                </div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad1d9"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_3categories_02.webp')}}"
                  alt=""
                  class="caterogy__card-img mod--desctop"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  80% af alt impotens er vaskulær betinget
                </div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad1e2"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_4categories_03.webp')}}"
                  alt=""
                  class="category__card-img mod--desctop"
                /><img
                  width="327"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_03-mob_1categories_03-mob.webp')}}"
                  alt=""
                  class="category__card-img mod--mob"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Hvorfor shockwave er bedre end Viagra
                </div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad1ec"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  sizes="100vw"
                  src="{{ asset('front_end/images/categories_5categories_04.webp')}}"
                  loading="lazy"
                  class="category__card-img mod--desctop"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Er penisforstørrelse overhovedet muligt
                </div>
              </a>
            </div>
          </div>
        </div>
        <div data-w-tab="Tab 2" class="category__tab w-tab-pane">
          <div class="category__columns">
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad1f7"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_2categories_01.webp')}}"
                  alt=""
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Sales Marketing
                </div>
                <div class="category__card-month">4 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad200"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_3categories_02.webp')}}"
                  alt=""
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Data analytics
                </div>
                <div class="category__card-month">3 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad209"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_4categories_03.webp')}}"
                  alt=""
                  class="category__card-img mod--desctop"
                /><img
                  width="327"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_03-mob_1categories_03-mob.webp')}}"
                  alt=""
                  class="category__card-img mod--mob"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Copywriting Pro
                </div>
                <div class="category__card-month">2 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad213"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  sizes="100vw"
                  src="{{ asset('front_end/images/categories_5categories_04.webp')}}"
                  loading="lazy"
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Design art
                </div>
                <div class="category__card-month">4 month</div>
              </a>
            </div>
          </div>
        </div>
        <div data-w-tab="Tab 3" class="category__tab w-tab-pane">
          <div class="category__columns">
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad21e"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_2categories_01.webp')}}"
                  alt=""
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Sales Marketing
                </div>
                <div class="category__card-month">4 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad227"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_3categories_02.webp')}}"
                  alt=""
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Data analytics
                </div>
                <div class="category__card-month">3 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad230"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_4categories_03.webp')}}"
                  alt=""
                  class="category__card-img mod--desctop"
                /><img
                  width="327"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_03-mob_1categories_03-mob.webp')}}"
                  alt=""
                  class="category__card-img mod--mob"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Copywriting Pro
                </div>
                <div class="category__card-month">2 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad23a"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  sizes="100vw"
                  src="{{ asset('front_end/images/categories_5categories_04.webp')}}"
                  loading="lazy"
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Design art
                </div>
                <div class="category__card-month">4 month</div>
              </a>
            </div>
          </div>
        </div>
        <div data-w-tab="Tab 4" class="category__tab w-tab-pane">
          <div class="category__columns">
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad245"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_2categories_01.webp')}}"
                  alt=""
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Sales Marketing
                </div>
                <div class="category__card-month">4 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad24e"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_3categories_02.webp')}}"
                  alt=""
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Data analytics
                </div>
                <div class="category__card-month">3 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad257"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_4categories_03.webp')}}"
                  alt=""
                  class="category__card-img mod--desctop"
                /><img
                  width="327"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_03-mob_1categories_03-mob.webp')}}"
                  alt=""
                  class="category__card-img mod--mob"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Copywriting Pro
                </div>
                <div class="category__card-month">2 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad261"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  sizes="100vw"
                  src="{{ asset('front_end/images/categories_5categories_04.webp')}}"
                  loading="lazy"
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Design art
                </div>
                <div class="category__card-month">4 month</div>
              </a>
            </div>
          </div>
        </div>
        <div data-w-tab="Tab 5" class="category__tab w-tab-pane">
          <div class="category__columns">
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad26c"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_2categories_01.webp')}}"
                  alt=""
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Sales Marketing
                </div>
                <div class="category__card-month">4 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad275"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_3categories_02.webp')}}"
                  alt=""
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Data analytics
                </div>
                <div class="category__card-month">3 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad27e"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_4categories_03.webp')}}"
                  alt=""
                  class="category__card-img mod--desctop"
                /><img
                  width="327"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_03-mob_1categories_03-mob.webp')}}"
                  alt=""
                  class="category__card-img mod--mob"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Copywriting Pro
                </div>
                <div class="category__card-month">2 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad288"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  sizes="100vw"
                  src="{{ asset('front_end/images/categories_5categories_04.webp')}}"
                  loading="lazy"
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Design art
                </div>
                <div class="category__card-month">4 month</div>
              </a>
            </div>
          </div>
        </div>
        <div data-w-tab="Tab 6" class="category__tab w-tab-pane">
          <div class="category__columns">
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad293"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_2categories_01.webp')}}"
                  alt=""
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Sales Marketing
                </div>
                <div class="category__card-month">4 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad29c"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_3categories_02.webp')}}"
                  alt=""
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Data analytics
                </div>
                <div class="category__card-month">3 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad2a5"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_4categories_03.webp')}}"
                  alt=""
                  class="category__card-img mod--desctop"
                /><img
                  width="327"
                  loading="lazy"
                  src="{{ asset('front_end/images/categories_03-mob_1categories_03-mob.webp')}}"
                  alt=""
                  class="category__card-img mod--mob"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Copywriting Pro
                </div>
                <div class="category__card-month">2 month</div>
              </a>
            </div>
            <div
              data-w-id="1aeea754-57b9-4d5f-520a-fb54996ad2af"
              class="category__col"
            >
              <a
                data-remodal-target="form"
                href="#"
                class="category__card w-inline-block"
                ><img
                  width="296"
                  sizes="100vw"
                  src="{{ asset('front_end/images/categories_5categories_04.webp')}}"
                  loading="lazy"
                  class="category__card-img"
                />
                <div class="category__card-arrow">
                  <img
                    loading="lazy"
                    src="{{ asset('front_end/images/ico_arrow-link.svg')}}"
                    alt=""
                  />
                </div>
                <div class="category__card-title stroke--skills-06">
                  Design art
                </div>
                <div class="category__card-month">4 month</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="testimonial section wf-section">
  <div
    class="w-layout-blockcontainer container-80-padding5rem custom w-container"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-7 mb-3">
          <div class="text-3rem" style="padding-top: 10px">
            Alexs historie
          </div>
          <p style="padding-top: 27px; padding-bottom: 27px">
            Vi har taget en snak med Kamilla, et af vores medlemmer, som
            har været en del af Embla-forløbet de sidste 9 måneder.
            Kamilla har oplevet, hvordan 20 kilo kan komme snigende på
            kroppen, uden man rigtigt lægger mærke til det, men også
            succesen i at ændre sin livsstil og smide kiloene - for anden
            gang. Men denne gang med en stofskiftesygdom på sidelinjen,
            som på mange måder modarbejder et vægttab.
          </p>
          <div class="div-block-248">
            <div>Læs Alexs historie</div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-5">
              <div class="div-block-247" style="padding: 55px">
                <p>
                  For Alex har vægt altid været noget privat og
                  tabubelagt. Men hun nåede et punkt, hvor han egentlig
                  syntes, han skyldte at fortælle sin historie.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-5 col-sm-12">
          <img
            src="{{ asset('front_end/images/gabriella-clare-marino-UpjtG9zkqdc-unsplash.jpg')}}"
            style="height: 624px; border-radius: 14px"
          />
        </div>
      </div>
    </div>
  </div>
</section>



<section class="section unkown wf-section">
  <div class="container-80-padding5rem custom w-container">
    <div class="w-layout-grid grid-10">
      <div id="w-node-_23945ff2-5390-451c-21db-5da89b5d3e74-2443881a">
        <h1 id="w-node-_4065c7ed-b1a0-b78e-4f33-12b348e3766c-2443881a">
          Heading
        </h1>
      </div>
      <div
        id="w-node-fa8ae010-a02b-f31a-f329-c762bd7557ea-2443881a"
        class="div-block-233"
      >
        <div class="div-block-234">
          <div class="div-block-231"></div>

          <nav class="div-block-232">
            <h2>P-shot</h2>
            <img
              src="{{ asset('front_end/images/02.jpg')}}"
              loading="lazy"
              width="165"
              sizes="100vw"
              srcset="{{ asset('front_end/images/02-p-500.jpg')}} 500w, {{ asset('front_end/images/02.jpg')}} 800w"
              alt=""
              class="image-101"
            />
          </nav>
        </div>
      </div>
      <div
        id="w-node-e42e74ab-b8b7-f7b0-6215-7c2cc9dd0bf8-2443881a"
        class="div-block-233"
      >
        <div class="div-block-234">
          <div class="div-block-231"></div>
          <div class="div-block-232">
            <h2>P-shot</h2>
            <img
              src="{{ asset('front_end/images/02.jpg')}}"
              loading="lazy"
              width="165"
              sizes="100vw"
              srcset="{{ asset('front_end/images/02-p-500.jpg')}} 500w, {{ asset('front_end/images/02.jpg 800w')}}"
              alt=""
              class="image-101"
            />
          </div>
        </div>
        <p class="paragraph-21">
          Eneste klinik i Danmark som tilbyder P-shot behandling
        </p>
      </div>
      <div
        id="w-node-_2620a0d5-03e2-f93a-8a4b-dcfbbfe089a3-2443881a"
        class="div-block-233"
      >
        <div class="div-block-234">
          <div class="div-block-231"></div>
          <div class="div-block-232">
            <h2>P-shot</h2>
            <img
              src="{{ asset('front_end/images/02.jpg')}}"
              loading="lazy"
              width="165"
              sizes="100vw"
              srcset="{{ asset('front_end/images/02-p-500.jpg')}} 500w, {{ asset('front_end/images/02.jpg')}} 800w"
              alt=""
              class="image-101"
            />
          </div>
        </div>
        <p class="paragraph-21">
          Eneste klinik i Danmark som tilbyder P-shot behandling
        </p>
      </div>
      <div
        id="w-node-f449e4dc-e194-0edb-c836-b3110b8da079-2443881a"
        class="div-block-233"
      >
        <div class="div-block-234">
          <div class="div-block-231"></div>
          <div class="div-block-232">
            <h2>P-shot</h2>
            <img
              src="{{ asset('front_end/images/02.jpg')}}"
              loading="lazy"
              width="165"
              sizes="100vw"
              srcset="{{ asset('front_end/images/02-p-500.jpg')}} 500w, {{ asset('front_end/images/02.jpg')}} 800w"
              alt=""
              class="image-101"
            />
          </div>
        </div>
        <p class="paragraph-21">
          Eneste klinik i Danmark som tilbyder P-shot behandling
        </p>
      </div>
    </div>
  </div>
</section>







@endsection
